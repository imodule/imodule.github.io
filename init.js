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
          { label: "Home", icon: "ti-home", link: "/" },
          { title: "Media", label: "Player", icon: "ti-control-play",
            children: [
              { label: "Player Default", link: "/player" },
              { label: "Player Theme 1", link: "/player/theme" },
            ]
          },
          { title: "Data Table", label: "Table", icon: "ti-layout-grid3",
            children: [
              { label: "Table Default", link: "/table" },
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
