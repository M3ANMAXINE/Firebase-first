<template>
  <div>
    
    <h2>BIENVENIDO {{ currentUser.email }} </h2>
    <ul>
      <li v-for="beer in beers" :key="beer.id"> {{ beer.data.name}} ${{ beer.data.price}} <img :src='beer.data.picture' alt="" width="200px" height="200px"> <router-link :to= "{name: 'beer', params: {id:beer.id}}">Beers</router-link> </li> 
   
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers'])
  },
  created() {
    this.setBeers()
  },

}
</script>

<style>

</style>