<template>
  <div class="container">
    <html-lightbox />

    <!-- <page-hero
      :background="page.homepage_hero_image"
      :accent-color="page.page_accent_color"
      :video-background="page.homepage_background_video"
    >
    </page-hero> -->
    <div>
    <siteHero />
    </div>
      
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import SiteHero from '~/components/siteHero.vue'

export default {
  components: {
    SiteHero
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
