(function ($, window, document) {
  $.fn.doubleTapToGo = function (params) {
    if (!('ontouchstart' in window) &&
      !navigator.msMaxTouchPoints &&
      !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) {
      return false
    }

    this.each(function () {
      var curItem = false

      $(this).on('click', function (e) {
        var item = $(this)
        if (item[0] !== curItem[0]) {
          e.preventDefault()
          curItem = item
        }
      })

      $(document).on('click touchstart MSPointerDown', function (e) {
        let resetItem = true

        let parents = $(e.target).parents()

        for (var i = 0; i < parents.length; i++) {
          if (parents[i] === curItem[0]) {
            resetItem = false
          }
        }

        if (resetItem) {
          curItem = false
        }
      })
    })
    return this
  }
})(jQuery, window, document)

// init doubleTapToGo
$(function () {
  $('.navigation li:has(ul)').doubleTapToGo()
})
