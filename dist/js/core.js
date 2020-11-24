var $jscomp = $jscomp || {}
$jscomp.scope = {}
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0
  return function() {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
  }
}
$jscomp.arrayIterator = function(a) {
  return { next: $jscomp.arrayIteratorImpl(a) }
}
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
  return b ? b.call(a) : $jscomp.arrayIterator(a)
}
function imoduleLoad(a, b) {
  var c = document.createElement("script")
  c.type = "text/javascript"
  c.src = a
  c.onreadystatechange = b
  c.onload = b
  document.head.appendChild(c)
}
function imoduleLoads(a, b) {
  for (
    var c = arguments,
      g = this,
      e = 0,
      h = function() {
        e++
        e >= a.length && b.call(g, c)
      },
      f = $jscomp.makeIterator(a),
      d = f.next();
    !d.done;
    d = f.next()
  )
    imoduleLoad(d.value, h)
}
;(function() {
  if (typeof window.CustomEvent === "function") return false
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent("CustomEvent")
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }
  CustomEvent.prototype = window.Event.prototype
  window.CustomEvent = CustomEvent
})()
// function groupBy(xs, f) {
//   return xs.reduce(function(r, v, i, a) {
//     var k =
//       arguments.length <= 4 || arguments[4] === undefined ? f(v) : arguments[4]
//     return (r[k] || (r[k] = [])).push(v), r
//   }, {})
// }
function imoduleInit() {
  var im = document.querySelectorAll("[imodule]")
  console.log(im)
  if (im && im.length) {
    // var imName = groupBy(im, function(item){
    //   return item.tagName
    // })

    var tagName = {}
    for (var i = 0; i < im.length; i++) {
      if (!tagName[im[i].tagName]) {
        tagName[im[i].tagName] = 1
      }
    }

    for (var k in tagName) {
      var plugin = k.toLowerCase().replace("im-", "")
      window.imoduleLoads(["/dist/js/" + plugin + ".js"], function() {
        var _event = new CustomEvent("imoduleLoaded")
        document.dispatchEvent(_event)
      })
    }
  }
}

imoduleInit()
