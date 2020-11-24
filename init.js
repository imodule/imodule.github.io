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
          { label: "Home", icon: "ti-user", link: "/", children: [{ label: "My Account" }] },
          { title: "Player", label: "Player", icon: "ti-settings", link: "/player", children: [{ label: "Menu Extent", }] }
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
