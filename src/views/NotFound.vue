<template>
  <div>
    <h1> <strong> La página que busca no está disponible </strong> </h1>
    <button @click="home" class="btn btn-danger">Volver a Inicio</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    home(){
      this.$router.push('/')
    }
  },

}
</script>

<style>

</style>