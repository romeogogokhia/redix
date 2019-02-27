import $ from 'jquery'
import ScrollReveal from 'scrollreveal'
import './aos'
import './object-fit-images'
import './doubleTapToGo'
// import '@fancyapps/fancybox'

window.jQuery = $
window.$ = $

ScrollReveal().reveal('.headline')

require('@fancyapps/fancybox')
