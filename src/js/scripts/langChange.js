$(function () {
  let hoverTimeout
  $('.lang').mouseover(function () {
    clearTimeout(hoverTimeout)
    $(this).children('.lang-text').children('.last').css({
      top: '17px',
      transform: 'rotateX(0)'
    })
  }).mouseout(function () {
    hoverTimeout = setTimeout(() => {
      $(this).children('.lang-text').children('.last').css({
        top: '0',
        transform: 'rotateX(180deg)'
      })
    }, 1000)
  })
})
