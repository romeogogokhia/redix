$(document).ready(function () {
  $('.arrow-container .arrows-wrap').click(function () {
    $('html, body').animate({
      scrollTop: $('.scrollToSection').offset().top
    }, 1000)
  })

  $('.scrollToUp').click(function () {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top
    }, 1000)
  })
})

$(function () {
  $(window).scroll(function () {
    formAnimation()
  })
  let count = 0
  function formAnimation () {
    if ($('.real-estate-form').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let realEstateForm = $('.real-estate-form').offset().top - (parseInt($('.real-estate-form').outerHeight()) / 2)
    if (curTop >= realEstateForm && count === 0) {
      count = 1
      $('.line--top, .line--bottom').css({
        animation: 'background-line-horizontal 1s linear 0s forwards'
      })
      $('.line--right, .line--left').css({
        animation: 'background-line-vertical 1s linear 1s forwards'
      })
    }
  }
})

$(function () {
  $(window).scroll(function () {
    borderAnimation()
  })
  let count = 0
  function borderAnimation () {
    if ($('.officeAppartments').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let officeAppartments = $('.officeAppartments').offset().top - (parseInt($('.officeAppartments').outerHeight()) / 2)
    if (curTop >= officeAppartments && count === 0) {
      count = 1
      $('.line--top, .line--bottom').css({
        animation: 'background-line-horizontal 2s linear 1s forwards'
      })
      $('.line--right, .line--left').css({
        animation: 'background-line-vertical 2s linear 2s forwards'
      })
    }
  }
  $('.officeAppartments .img-wrap').hover(function () {
    $(this).find('.line--top, .line--bottom').css({
      animation: 'background-line-horizontal 1s linear forwards'
    })
    $(this).find('.line--right, .line--left').css({
      animation: 'background-line-vertical 1s linear forwards'
    })
  })
})

$(function () {
  $(window).scroll(function () {
    businessCenter()
  })
  let count = 0
  function businessCenter () {
    if ($('.businessCenter').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let sNews = $('.businessCenter').offset().top - (parseInt($('.businessCenter').outerHeight()) / 2)
    if (curTop >= sNews && count === 0) {
      count = 1
      $('.businessCenter').addClass('businessCenter-active')
    }
  }
})

$(function () {
  $(window).scroll(function () {
    sNewsScroll()
  })
  let count = 0
  function sNewsScroll () {
    if ($('.s-news').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let sNews = $('.s-news').offset().top - (parseInt($('.s-news').outerHeight()) / 2)
    if (curTop >= sNews && count === 0) {
      count = 1
      $('.s-news').addClass('news-active')
    }
  }
})

$(function () {
  $(window).scroll(function () {
    strategyArticles()
  })
  let count = 0
  function strategyArticles () {
    if ($('.strategyArticles').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let sNews = $('.strategyArticles').offset().top - (parseInt($('.strategyArticles').outerHeight()) / 2)
    if (curTop >= sNews && count === 0) {
      count = 1
      $('.strategyArticles').addClass('strategy-active')
    }
  }
})

$(function () {
  $(window).scroll(function () {
    sYears()
  })
  let count = 0
  function sYears () {
    if ($('.sYears').offset() === undefined) {
      return false
    }
    let curTop = parseInt($(document).scrollTop())
    let sNews = $('.sYears').offset().top - (parseInt($('.sYears').outerHeight()) / 2)
    if (curTop >= sNews && count === 0) {
      count = 1
      $('.sYears').addClass('sYears-active')
    }
  }
})
