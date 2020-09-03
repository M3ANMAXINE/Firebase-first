<template>
  <div class="container">
    <form @submit.prevent='submitForm'>
      <div class="form-group">
        <label >Nombre Cerveza</label>
        <input v-model="currentBeer.data.name" type="text" class="form-control" aria-describedby="emailHelp">       
      </div>
      <div class="form-group">
        <label>Precio</label>
        <input v-model="currentBeer.data.price"  type="number" class="form-control">
      </div>
       <div class="form-group">
        <label>Url Imagen</label>
        <input v-model="currentBeer.data.picture"  type="text" class="form-control">
      </div>
      <div>
        <button class="btn btn-primary mb-2">{{currentBeer.id ? 'Editar' : 'Crear' }}</button>
        <!-- <button class="btn btn-primary mb-2">Cancelar</button> -->

      </div>
    </form>
  </div>
</template>
 
<script>
import {mapActions} from 'vuex'
export default {
  props: {
    currentBeer: {
      type: Object,
      required: true
    }
  },
  
   methods: {
      ...mapActions (['submitBeer']),
      submitForm() {
        if(this.currentBeer.id) { // si existe id, editamos
          this.$emit('edit-beer', this.currentBeer)
        } else { // si no, creamos nueva beer
          this.createBeer()
          
        }
        this.cleanCurrentBeer
      },
 
      createBeer(){
        const beer = {
        name: this.currentBeer.data.name,
        price: this.currentBeer.data.price,
        picture: this.currentBeer.data.picture
      }
      this.submitBeer(beer)
      this.cleanCurrentBeer
      },

      cleanCurrentBeer() {

      this.currentBeer.data.name = '',
      this.currentBeer.data.price = '',
      this.currentBeer.data.picture = ''
    }
    
    },

  }

</script>