$(function () {
  $('.hamburger-top').click(function () {
    if ($('.hamburger-top[class*="is-active"]').length) {
      $(this).removeClass('is-active')
      $('.navigation').css({ 'z-index': '111' })
      $('.nav-logo').css({ 'z-index': '111' })
      $('.logo').css({ 'z-index': '333' })
      $('ul.navbar-nav').css('display', 'none')
    } else {
      $(this).addClass('is-active')
      $('.navigation').css({ 'z-index': '222' })
      $('.nav-logo').css({ 'z-index': '-1' })
      $('.logo').css({ 'z-index': '-1' })
      $('ul.navbar-nav').css('display', 'block')
    }
    $('.second-menu').css('display', 'none')
  })

  if ($(window).width() < 768) {
    $('li.drop-down > a').on('click', function (event) {
      event.preventDefault()
      $(this).parent().find('ul').first().slideToggle(500)

      $(this).parent().siblings().find('ul').hide(300)

      // Hide menu when clicked outside
      $(this).parent().find('ul').mouseleave(function () {
        var thisUI = $(this)
        $('html').click(function () {
          thisUI.hide(300)
          $('html').unbind('click')
        })
      })
    })
  } else {
    $('li.drop-down').mouseenter(function () {
      $(this).children('ul').stop(true, true).delay(100).animate({
        opacity: '1',
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
      }, 'slow')
    }).mouseleave(function () {
      $(this).children('ul').stop(true, true).animate({
        opacity: '0',
        height: 'hide',
        marginTop: 'hide',
        marginBottom: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide'
      }, 'slow')
    })
    // $('li.drop-down').hover(function () {
    //   $(this).children('ul').stop(true, true).delay(100).animate({
    //     opacity: '1',
    //     height: 'show',
    //     marginTop: 'show',
    //     marginBottom: 'show',
    //     paddingTop: 'show',
    //     paddingBottom: 'show'
    //   }, 'slow')
    // }, function () {
    //   $(this).children('ul').stop(true, true).animate({
    //     opacity: '0',
    //     height: 'hide',
    //     marginTop: 'hide',
    //     marginBottom: 'hide',
    //     paddingTop: 'hide',
    //     paddingBottom: 'hide'
    //   }, 'slow')
    // })
  }

  $(window).resize(function () {
    $('.second-menu').removeAttr('style')
    // $('.hamburger-top').removeClass('is-active')
    if ($(window).width() > 768) {
      $('.navbar-nav').removeAttr('style')
    }
  })
})
