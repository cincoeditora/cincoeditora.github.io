<template>
  <section class="hero-index hero centered">
    <BackgroundHero />
    <contentHero />
  </section>
</template>
<script>
import BackgroundHero from '~/components/backgroundHero.vue'
import ContentHero from '~/components/contentHero.vue'

export default {
  components: {
    BackgroundHero,
    ContentHero,

  }
}
</script>