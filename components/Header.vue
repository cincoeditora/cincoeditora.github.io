<template>
<div class="header show unfilled blue">
    <div class="wrapper">
        <Logo />
        <navbar />
       </div></div>
</template>
<script>
import Navbar from '~/components/navbar.vue'
import Logo from '~/components/logo.vue'

export default {
  components: {
    Navbar,
    Logo
  }
}
</script>
<style>

</style>