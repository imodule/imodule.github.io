<template>
  <div class="all-table-wrap" :style="{ height: tableHeight + 'px' }">
    <!--Fixed top header-->
    <div class="fixRow-table" ref="tableTop">
      <table class="table-style">
        <thead>
          <tr>
            <th v-for="(col, k) in tableColumnsFix.allCol" :key="k">
              <div :style="{ width: col.width + 'px' }">
                {{ col.title }}
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <!--Fixed the left header-->
    <template
      v-if="tableData.length > 0 && tableColumnsFix.fixLeftCol.length > 0"
    >
      <div class="fixLeftCol-table-wrap-title">
        <table class="table-style">
          <thead>
            <tr>
              <th v-for="(th, k) in tableColumnsFix.fixLeftCol" :key="k">
                <div :style="{ width: th.width + 'px' }">
                  {{ th.title }}
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <!--Fixed left-->
      <div
        class="fixLeftCol-table-wrap"
        ref="tableLeft"
        :style="{ height: tableFixHeight }"
      >
        <table class="table-style">
          <thead>
            <tr>
              <th v-for="(th, k) in tableColumnsFix.fixLeftCol" :key="k">
                <div :style="{ width: th.width + 'px' }">
                  {{ th.title }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(rowData, index) in tableData"
              :class="{ 'tr-hover': nowHover == index }"
              :style="{ height: heightRows[index] }"
              @mouseover="trHover(index)"
              @mouseout="trOut"
              :key="index"
            >
              <td v-for="(th, k) in tableColumnsFix.fixLeftCol" :key="k">
                <div :style="{ width: th.width + 'px' }">
                  {{ rowData[th.key] }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <!--Table main-->
    <div class="table-fix-tbody-wrap">
      <div
        :style="{ height: tableHeight + 'px' }"
        class="table-wrap"
        @scroll="tableScroll"
        ref="table"
      >
        <table class="table-style table-t" ref="tableTrue">
          <thead>
            <tr>
              <th
                style="min-width:120px"
                v-for="(col, k) in tableColumnsFix.allCol"
                :key="k"
              >
                <div :style="{ width: col.width + 'px' }">
                  {{ col.title }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="tableData.length == 0">
              <tr>
                <td :colspan="tableColumnsFix.allCol.length">
                  No data
                </td>
              </tr>
            </template>
            <tr
              :style="{ height: heightRows[index] }"
              :class="{ 'tr-hover': nowHover == index }"
              @dblclick="dblclick(rowData, index)"
              @mouseover="trHover(index)"
              @mouseout="trOut"
              v-for="(rowData, index) in tableData"
              :key="index"
            >
              <!-- main col -->
              <td v-for="(col, k) in tableColumnsFix.allCol" :key="k">
                <div :style="{ width: col.width + 'px' }">
                  <template v-if="col.html">
                    <span v-html="rowData[col.key]"></span>
                  </template>
                  <template v-else>{{ rowData[col.key] }}</template>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--Fix the right header-->
    <template
      v-if="tableData.length > 0 && tableColumnsFix.fixRightCol.length > 0"
    >
      <div
        class="fixRightCol-table-wrap-title"
        :class="{ 'no-left-scroll': noLeftScroll }"
      >
        <table class="table-style">
          <thead>
            <tr>
              <th v-for="(th, k) in tableColumnsFix.fixRightCol" :key="k">
                <div :style="{ width: th.width + 'px' }">
                  {{ th.title }}
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <!--Fixed right-->
      <div
        :style="{ height: tableFixHeight }"
        class="fixRightCol-table-wrap"
        :class="{ 'no-left-scroll': noLeftScroll }"
        ref="tableRight"
      >
        <table class="table-style">
          <thead>
            <tr>
              <th v-for="(th, k) in tableColumnsFix.fixRightCol" :key="k">
                <div :style="{ width: th.width + 'px' }">
                  {{ th.title }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              :style="{ height: heightRows[index] }"
              :class="{ 'tr-hover': nowHover == index }"
              @mouseover="trHover(index)"
              @mouseout="trOut"
              v-for="(rowData, index) in tableData"
              :key="index"
            >
              <td v-for="(th, k) in tableColumnsFix.fixRightCol" :key="k">
                {{ rowData[th.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <!--end -->
  </div>
</template>

<script>
export default {
  name: "imTable",
  props: {
    tableHeight: {
      type: Number,
      default: 600
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableColumns: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: function() {
    return {
      heightRows: [],
      noLeftScroll: "",
      tableFixHeight: "0px",
      nowHover: -1 //Currently passing line
    }
  },
  computed: {
    //Fixed column data
    tableColumnsFix: function() {
      let fixLeftCol = []
      let fixRightCol = []
      let unFixCol = []
      for (let i = 0; i < this.tableColumns.length; i++) {
        let thisData = this.tableColumns[i]
        if (thisData.fixed && thisData.fixed == "left") {
          fixLeftCol.push(thisData)
        } else if (thisData.fixed && thisData.fixed == "right") {
          fixRightCol.push(thisData)
        } else {
          unFixCol.push(thisData)
        }
      }
      unFixCol.unshift.apply(unFixCol, fixLeftCol)
      unFixCol.push.apply(unFixCol, fixRightCol)

      return {
        fixLeftCol: fixLeftCol, //Fixed on the left
        fixRightCol: fixRightCol, //Fixed on the right
        allCol: unFixCol //Fixed header
      }
    }
  },
  watch: {
    //The table data is updated and the table is fixed
    tableData: function() {
      let vm = this
      vm.$nextTick(function() {
        vm.checkFix()
        vm.calcTableFixHeight()
        vm.calcHeightRows()
      })
    },
    tableColumns: function() {
      this.$nextTick(function() {
        this.checkFix()
        this.calcTableFixHeight()
      })
    }
  },
  methods: {
    //Fixed left
    tableScroll: function() {
      requestAnimationFrame(this.tableScrollMethod)
      // this.tableScrollMethod();
    },
    tableScrollMethod: function() {
      //Head scrolling
      this.$refs.tableTop &&
        (this.$refs.tableTop.scrollLeft = this.$refs.table.scrollLeft)
      //Scroll left
      this.$refs.tableLeft &&
        (this.$refs.tableLeft.scrollTop = this.$refs.table.scrollTop)
      //Scroll right
      this.$refs.tableRight &&
        (this.$refs.tableRight.scrollTop = this.$refs.table.scrollTop)
    },
    checkFix: function() {
      let vm = this
      let ths = vm.$refs.tableTrue.querySelectorAll("th")
      for (let i = 0; i < vm.tableColumns.length; i++) {
        //Set the width of each column
        let allCol = vm.tableColumnsFix.allCol[i]
        vm.$set(allCol, "width", allCol.width || ths.item(i).clientWidth)
      }
    },
    calcHeightRows: function() {
      let vm = this
      try {
        const tr = vm.$refs.tableTrue.querySelectorAll("tbody > tr")
        let arr = []
        for (var i = 0; i < tr.length; i++) {
          let _l = vm.$refs.tableLeft.querySelectorAll("tbody > tr")[i]
            .offsetHeight
          let _m = vm.$refs.tableTrue.querySelectorAll("tbody > tr")[i]
            .offsetHeight
          let _r = vm.$refs.tableRight.querySelectorAll("tbody > tr")[i]
            .offsetHeight
          // console.log(_m)
          let _max = Math.ceil(Math.max(_l, _m, _r))
          arr.push(_max + "px")
        }
        vm.heightRows = arr
      } catch (err) {
        console.log(err)
      }
    },
    //Calculate table height
    calcTableFixHeight: function() {
      if (this.$refs.tableTrue.clientHeight <= this.tableHeight) {
        //When the table data is not enough to fill the total height
        this.noLeftScroll = true
        this.tableFixHeight = this.$refs.tableTrue.clientHeight + "px"
      } else {
        this.noLeftScroll = false
        this.tableFixHeight = this.tableHeight - 10 + "px"
      }
    },
    //Double-click event
    dblclick: function(rowData, index) {
      this.$emit("dblclick", rowData, index)
    },
    //Hover change event
    trHover: function(index) {
      this.nowHover = index
    },
    trOut: function() {
      this.nowHover = -1
    }
  },

  mounted: function() {
    let vm = this
    vm.checkFix()
    vm.calcTableFixHeight()

    //Listen for window change events
    window.addEventListener("resize", function() {
      vm.checkFix()
      vm.calcTableFixHeight()
    })
  }
}
</script>
<style lang="scss">
$bg: #fff;
$bgActive: #f5f7f9;
$bgFocus: #ebf7ff;
$bgBold: #cee6f9;
$color: #555;
$borderColor: #c4c6c7;
$barColor: #f5f5f5;
$barColorActive: #d2d2d2;

$darkBg: #36404a;
$darkBgActive: #2f3740;
$darkBgFocus: #45515f;
$darkBgBold: #2a5b82;
$darkColor: #a2a8b5;
$darkBorderColor: #2a3139;
$darkBarColor: #4a5663;
$darkBarColorActive: #657688;

.all-table-wrap {
  width: 100%;
  position: relative;
  cursor: default;
  background-color: $bg;
}
.dark.all-table-wrap {
  background-color: $darkBg;
}

.all-table-wrap * {
  box-sizing: border-box;
}

.all-table-wrap thead th {
  background-color: $bgBold;
  height: 40px;
  padding: 8px;
  text-transform: capitalize;
}
.dark.all-table-wrap thead th {
  background-color: $darkBgBold;
}

.table-style {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: transparent;
}

.table-style th {
  font-size: 13px;
  color: $color;
  border: 1px solid $borderColor;
}
.dark .table-style th {
  color: $darkColor;
  border-color: $darkBorderColor;
}

.tr-hover {
  background-color: $bgFocus !important;
}
.dark .tr-hover {
  background-color: $darkBgFocus !important;
}

.table-style tbody tr:nth-child(even) {
  background: $bgActive;
}
.dark .table-style tbody tr:nth-child(even) {
  background: $darkBgActive;
}

.table-style td {
  padding: 8px;
  font-size: 12px;
  text-align: left;
  color: $color;
  border: 1px solid $borderColor;
  max-width: 600px;
  white-space: normal;
}
.dark .table-style td {
  color: $darkColor;
  border-color: $darkBorderColor;
}

.table-style td > * {
  word-break: break-word;
}

.table-style tbody > tr:first-child > td {
  border-top-color: transparent;
}

.table-wrap {
  width: 100%;
  white-space: nowrap;
  overflow: auto;
  position: relative;
}

.fixRow-table {
  background-color: $bg;
  position: relative;
  overflow: hidden;
  margin-right: 10px; /*fix*/
  z-index: 22;
}
.dark .fixRow-table {
  background-color: $bg;
}

.table-t {
  width: 100%;
}

.table-t thead th {
  box-sizing: border-box;
  padding: 0 8px;
  border-bottom: none;
}

.table-wrap::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: $barColor;
}
.dark .table-wrap::-webkit-scrollbar {
  background-color: $darkBarColor;
}

.table-wrap::-webkit-scrollbar-track {
  box-shadow: inset 0 1 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: $barColor;
}
.dark .table-wrap::-webkit-scrollbar-track {
  background-color: $darkBarColor;
}

.table-wrap::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 1 6px rgba(0, 0, 0, 0.3);
  background-color: $barColorActive;
}
.dark .table-wrap::-webkit-scrollbar-thumb {
  background-color: $darkBarColorActive;
}

.table-wrap::-webkit-scrollbar-corner {
  background-color: $barColor;
}
.dark .table-wrap::-webkit-scrollbar-corner {
  background-color: $darkBarColor;
}

.table-fix-tbody-wrap {
  top: -41px;
  position: relative;
}

.fixLeftCol-table-wrap-title {
  position: absolute;
  top: 0;
  background-color: $bg;
  z-index: 99;
}
.dark .fixLeftCol-table-wrap-title {
  background-color: $darkBg;
}

/*Left side of body*/

.fixLeftCol-table-wrap {
  overflow: hidden;
  position: absolute;
  background-color: $bg;
  z-index: 33;
  top: 0;
  box-shadow: 2px 0 8px -2px rgba(0, 0, 0, 0.15);
}
.dark .fixLeftCol-table-wrap {
  background-color: $darkBg;
}
/*
.fixLeftCol-table-wrap tr {
  box-shadow: 2px 0 6px -2px rgba(0, 0, 0, .2);
}*/

.fixRightCol-table-wrap-title {
  position: absolute;
  top: 0;
  right: 10px;
  background-color: $bg;
  z-index: 99;
}
.dark .fixRightCol-table-wrap-title {
  background-color: $darkBg;
}

.fixRightCol-table-wrap {
  overflow: hidden;
  position: absolute;
  background-color: $bg;
  z-index: 33;
  top: 0;
  right: 10px;
  box-shadow: -2px 0 8px -2px rgba(0, 0, 0, 0.15);
}
.dark .fixRightCol-table-wrap {
  background-color: $darkBg;
}
/*When the data is not too much and there is no scroll bar on the right*/

.no-left-scroll {
  right: 0;
}
</style>
