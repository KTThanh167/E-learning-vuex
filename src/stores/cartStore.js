import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },

  getters: {
    totalItems: (state) => state.cart.length,

    isInCart: (state) => (id) => {
      return state.cart.some((item) => item.id === id)
    },

    totalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        const price = Number(item.newPrice?.replace('$', '') || 0)
        return total + price * item.quantity
      }, 0)
    },
  },

  mutations: {
    ADD_TO_CART(state, course) {
      state.cart.push({
        id: course.id,
        quantity: 1,
      })
    },

    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id)
    },

    INCREASE_COUNT(state, id) {
      const item = state.cart.find((i) => i.id === id)
      if (item) item.quantity++
    },

    DECREASE_COUNT(state, id) {
      const item = state.cart.find((i) => i.id === id)
      if (item && item.quantity > 1) item.quantity--
    },

    SAVE_TO_LOCAL_STORAGE(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },

  actions: {
    addToCart({ commit, getters }, course) {
      if (!getters.isInCart(course.id)) {
        commit('ADD_TO_CART', course)
        commit('SAVE_TO_LOCAL_STORAGE')
      }
    },

    removeFromCart({ commit }, id) {
      commit('REMOVE_FROM_CART', id)
      commit('SAVE_TO_LOCAL_STORAGE')
    },

    toggleCart({ dispatch, getters }, course) {
      if (getters.isInCart(course.id)) {
        dispatch('removeFromCart', course.id)
      } else {
        dispatch('addToCart', course)
      }
    },

    increaseCount({ commit }, id) {
      commit('INCREASE_COUNT', id)
      commit('SAVE_TO_LOCAL_STORAGE')
    },

    decreaseCount({ commit }, id) {
      commit('DECREASE_COUNT', id)
      commit('SAVE_TO_LOCAL_STORAGE')
    },
  },
})
