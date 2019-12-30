<template>
  <div>
        <div class="section-right"></div>
        <div class="section-left"></div>
        <div class="box-hero">
          <Logo />
          <div class="text-main-hero"></div>
          <button class="btn btn-blue">Button</button>
        </div>
        </div>
    </div>
</template>
<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-600;
  }
</style>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>
