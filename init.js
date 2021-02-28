module.exports = `<script>
window.onload = function(){
  var app = new Vue({
    el: '#page',
    data: {
      debut: false,
      slotLogo: "header-begin",
      menuFloat: "right",
      backgroundColor: '#323b44',
      headerData: {
        dark: true,
        fixed: true,
        menu: [
          { label: "Dung Pham", icon: "ti-user", children: [{ label: "My Account" }] },
        ]
      },
      navLeftData: {
        toggle: true,
        dark: true,
        menu: [
          { title: "Panel", label: "Card", icon: "ti-layout-list-thumb",
            children: [
              { label: "Card Default", link: "/card.html" },
            ]
          },
          { title: "Media", label: "Player", icon: "ti-control-play",
            children: [
              { label: "Player Default", link: "/player.html" },
            ]
          },
          { title: "Data Table", label: "Table", icon: "ti-layout-grid3",
            children: [
              { label: "Table Default", link: "/table.html" },
            ]
          },
          { title: "Form", label: "Form", icon: "ti-pencil-alt",
            children: [
              { label: "Form Default", link: "/form.html" },
            ]
          },
        ]
      }
    },
    methods: {
      onClicked(opt) {
        console.log(opt)
        if (opt.link) {
          location.href = opt.link;
        }
      }
    },
    mounted: function () {
      var vm = this;
      if (window.innerWidth <= 768) {
        vm.slotLogo = 'header-center'
      }
      window.onresize = function () {
        if (window.innerWidth <= 768) {
          vm.slotLogo = 'header-center'
        }
        else {
          vm.slotLogo = 'header-begin'
        }
      }
    }
  });
}
</script>`
