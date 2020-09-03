import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    beers: [],
    beer: undefined
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    SET_BEERS(state, beers) {
      state.beers = beers
    },
    SET_BEER(state,beer) {
      state.beer = beer
    },
    SUBMIT_BEER(state,beer) {
      state.beer = beer
    }
  },
  actions: {
    setUser({commit}, user) {
    commit('SET_USER', user)
    },
    setBeers ({commit}) {
      axios.get('https://us-central1-testfirebase-4f662.cloudfunctions.net/api/beers/').then((response) => {
        commit('SET_BEERS', response.data)// 
      })
      },
      setBeer({commit}, id) {
        axios.get(`https://us-central1-testfirebase-4f662.cloudfunctions.net/api/beers/${id}`).then((response) => {
        commit('SET_BEER', response.data)
      })
    },
    submitBeer ({dispatch},beer) {
      axios.post('https://us-central1-testfirebase-4f662.cloudfunctions.net/api/beers/',beer).then(() => {
        dispatch('setBeers')
      })
      },
      deleteBeer({dispatch},id) {
        axios.delete(`https://us-central1-testfirebase-4f662.cloudfunctions.net/api/beers/${id}`).then(() => {
          dispatch('setBeers')
        })
        },
      updateBeer({dispatch},beer) {
        console.log(beer.data)
        axios.put(`https://us-central1-testfirebase-4f662.cloudfunctions.net/api/beers/${beer.id}`, beer.data).then(() => {
          dispatch('setBeers')
        })
      }
  }
})