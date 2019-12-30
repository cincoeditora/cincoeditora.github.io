import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import siteFooter from '~/components/siteFooter'
import siteHero from '~/components/siteHero.vue'
import pageHero from '~/components/pageHero'
import newsletterSignup from '~/components/newsletterSignup'


/**
 * Register components.
 */
Vue.component('newsletter-signup', newsletterSignup)
Vue.component('site-header', siteHeader)
Vue.component('site-hero', siteHero)
Vue.component('html-lightbox', htmlLightbox)
