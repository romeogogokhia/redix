import './vendor/vendor'

import './scripts/afterRefreshScrollUp'
import './scripts/hamburger-menu'
import './scripts/scrollMaster'
import './scripts/scrollAnimations'
import './scripts/langChange'
import './scripts/slider'
import './scripts/popup'
import './scripts/ajaxLoad.js'

import './Hyphenator'

$(function () {
  $('.second-menu--li--link.active').parents('.drop-down').children('a').addClass('active')

  if (window.location.href.indexOf('rent') > -1 || window.location.href.indexOf('sale') > -1) {
    $('a[href*=10]').addClass('active')
  }
})
