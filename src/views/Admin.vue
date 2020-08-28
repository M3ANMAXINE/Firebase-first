<template>
  <div>
    <h1>GRACIAS POR LA AYUDA</h1>
    <h2>BIENVENIDO {{ currentUser.email }} </h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser'])
  }

}
</script>

<style>

</style>