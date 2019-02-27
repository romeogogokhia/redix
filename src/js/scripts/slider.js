$(function () {
  $('.flexbox-slide').on('click mouseover', function () {
    $('.flexbox-slide').css({
      transition: '4s', flexShrink: '1', width: '20%', animation: 'none'
    })
    $('.text-block').css({
      transition: 'all .4s linear .5s',
      transform: 'rotate(-90deg) translate(-100%) translateX(50%)',
      transformOrigin: 'left center',
      top: '50%',
      left: '50%',
      right: 'auto'
    })
    if ($(this).css('flexShrink') !== '0') {
      $(this).find('.text-block').css({
        left: 'calc(100% - ' + $('.text-block').first().height() + 'px)'
      })
      $(this).css({
        transition: '2s', flexShrink: 0, width: '70%', animation: 'grayscale-in 2s linear forwards'
      })
      if ($(window).outerWidth() <= '992') {
        $(this).css({
          transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
        })
      }
    } else if ($(this).css('flexShrink') === '0') {
      $(this).css({
        transition: '2s', flexShrink: '1', width: '20%', animation: 'grayscale-out 2s linear backwards'
      })
      if ($(this).hasClass('flexbox-slide')) {
        if ($(window).outerWidth() <= '992') {
          $(this).css({
            transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
          })
        }
        $(this).css({
          flexShrink: 0, width: '70%', animation: 'grayscale-in 0s linear forwards'
        })
        $(this).find('.text-block').css({
          transition: 'all .4s linear .5s',
          left: 'calc(100% - ' + $('.text-block').first().height() + 'px)'
        })
      }
    }
  })
  if ($(window).outerWidth() <= '992') {
    $('.flexbox-slide').first().css({
      transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
    })
  } else {
    $('.flexbox-slide').first().css({
      transition: '2s', flexShrink: 0, width: '70%', animation: 'grayscale-in 2s linear forwards'
    })
  }

  $('.text-block').first().css({
    left: 'calc(100% - ' + $('.text-block').first().height() + 'px)'
  })
})

// $(function () {
//   $('.text-block').css({
//     transformOrigin: '50% 50%',
//     marginLeft: 'auto',
//     position: 'absolute',
//     top: '50%',
//     transform: 'rotate(-90deg) translateY(-50%)',
//     height: $('.text-block').height() + 'px',
//     width: $('.text-block').width() + 'px',
//     right: '-' + $('.text-block').width() / 2 + 'px',
//     marginTop: '-' + $('.text-block').height() / 2 + 'px'
//   })
//   $('.flexbox-slide').on('click mouseover', function () {
//     $('.flexbox-slide').css({
//       transition: '4s', flexShrink: '1', width: '20%', animation: 'none'
//     })
//     $('.text-block').css({
//       transformOrigin: '50% 50%',
//       marginLeft: 'auto',
//       position: 'absolute',
//       top: '50%',
//       transform: 'rotate(-90deg) translateY(-50%)',
//       height: $('.text-block').height() + 'px',
//       width: $('.text-block').width() + 'px',
//       right: '-' + $('.text-block').width() / 2 + 'px',
//       marginTop: '-' + $('.text-block').height() / 2 + 'px'
//     })
//     if ($(this).css('flexShrink') !== '0') {
//       $(this).find('.text-block').css({
//         transformOrigin: '50% 50%',
//         marginLeft: 'auto',
//         position: 'absolute',
//         top: '50%',
//         transform: 'rotate(-90deg) translateY(-50%)',
//         height: $('.text-block').height() + 'px',
//         width: $('.text-block').width() + 'px',
//         right: '-' + $('.text-block').width() / 2 + 'px',
//         marginTop: '-' + $('.text-block').height() / 2 + 'px'
//       })
//       $(this).css({
//         transition: '2s', flexShrink: 0, width: '70%', animation: 'grayscale-in 2s linear forwards'
//       })
//       if ($(window).outerWidth() <= '992') {
//         $(this).css({
//           transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
//         })
//       }
//     } else if ($(this).css('flexShrink') === '0') {
//       $(this).css({
//         transition: '2s', flexShrink: '1', width: '20%', animation: 'grayscale-out 2s linear backwards'
//       })
//       if ($(this).hasClass('flexbox-slide')) {
//         // alert(1)
//         if ($(window).outerWidth() <= '992') {
//           $(this).css({
//             transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
//           })
//         }
//         $(this).css({
//           flexShrink: 0, width: '70%', animation: 'grayscale-in 0s linear forwards'
//         })
//         $(this).find('.text-block').css({
//           transformOrigin: '50% 50%',
//           marginLeft: 'auto',
//           position: 'absolute',
//           top: '50%',
//           transform: 'rotate(-90deg) translateY(-50%)',
//           height: $('.text-block').height() + 'px',
//           width: $('.text-block').width() + 'px',
//           right: '-' + $('.text-block').width() / 2 + 'px',
//           marginTop: '-' + $('.text-block').height() / 2 + 'px'
//         })
//       }
//     }
//   })
//   if ($(window).outerWidth() <= '992') {
//     $('.flexbox-slide').first().css({
//       transition: '2s', flexShrink: 0, width: '60%', animation: 'grayscale-in 2s linear forwards'
//     })
//   } else {
//     $('.flexbox-slide').first().css({
//       transition: '2s', flexShrink: 0, width: '70%', animation: 'grayscale-in 2s linear forwards'
//     })
//   }
//   $('.text-block').first().css({
//     transformOrigin: '50% 50%',
//     marginLeft: 'auto',
//     position: 'absolute',
//     top: '50%',
//     transform: 'rotate(-90deg) translateY(-50%)',
//     height: $('.text-block').height() + 'px',
//     width: $('.text-block').width() + 'px',
//     right: '-' + $('.text-block').width() / 2 + 'px',
//     marginTop: '-' + $('.text-block').height() / 2 + 'px'
//   })
// })

// transformOrigin: '50% 50%',
// marginLeft: 'auto',
// position: 'absolute',
// top: '50%',
// transform: 'rotate(-90deg) translateY(-50%)',
// height: '20px',
// width: '100px',
// right: '-50px',
// marginTop: '-10px'
