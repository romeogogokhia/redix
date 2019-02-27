$(function () {
  let isRefreshed = true
  $('.img-wrap').on('click', function () {
    isRefreshed = false
  })
  $(window).on('beforeunload', function () {
    if (isRefreshed) {
      $(window).scrollTop(0)
    }
  })
})
