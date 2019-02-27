$(function () {
  $('.leadership-info').on('click', function () {
    $('body').addClass('is-overflow-hidden')
    $(this).nextAll('.popup-overlay').fadeIn()
    $(this).nextAll('.popup-overlay').find('.popup-hamburger').addClass('is-active').fadeIn()
    $(this).nextAll('.popup-wrap').fadeIn()
  })

  $('.popup-overlay').on('click', function () {
    $('body').removeClass('is-overflow-hidden')
    $('.popup-wrap').fadeOut()
    $('.popup-hamburger').removeClass('is-active').fadeOut()
    $('.popup-overlay').fadeOut()
  })
  // $('.footer-from-btn--arrow').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).nextAll('.popup-overlay').fadeIn()
  //   $(this).nextAll('.popup-overlay').find('.popup-hamburger').addClass('is-active').fadeIn()
  //   $(this).nextAll('.popup-wrap').fadeIn()
  // })
})
