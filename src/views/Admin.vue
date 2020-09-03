<template>
  <div>
    
    <h2>BIENVENIDO {{ currentUser.email }} </h2>
    <form-component @edit-beer='beerUpdate' :currentBeer = "currentBeer" />
    <ul>
      <li v-for="beer in beers" :key="beer.id"> {{ beer.data.name}} ${{ beer.data.price}}  <img :src='beer.data.picture' alt="" width="200px" height="200px"> <router-link :to= "{name: 'beer', params: {id:beer.id}}">Detalle</router-link>
      <button @click="setCurrentBeer(beer)" class="btn btn-danger">Editar</button> 
      <button @click="deleteBeer(beer.id)" class="btn btn-danger"> Eliminar</button>
      
      </li> 
   
    </ul>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
import {mapState, mapActions} from 'vuex'

export default {
 data(){
    return {
      currentBeer: {
        data: {
          name: '',
          price: 0,
          picture:'',
        },
        id: undefined
      }
    }  
  },
  components: {
    FormComponent
  },
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers','deleteBeer', 'updateBeer']),
    setCurrentBeer(beer) {
      this.currentBeer = beer
    },
    beerUpdate(beer) {
      const newBeer = {
        data: {
          name: beer.data.name,
          price: beer.data.price,
          picture: beer.data.picture
        },
        id: beer.id
     }
     this.updateBeer(newBeer),
     this.currentBeer.data.name = '',
     this.currentBeer.data.price = 0,
     this.currentBeer.data.picture = '',
     this.currentBeer.id =undefined
  }
  },
     created() {
    this.setBeers()
    },
    editBeer() {
     },
  }
</script>