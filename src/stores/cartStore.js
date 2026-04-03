import { createStore } from 'vuex'
import { coursesRecommended } from '@/data/Course/RecommendedCourse'

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cartVueX')) || [],
  },

  getters: {
    totalItems: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },

    isInCart: (state) => (id) => {
      return state.cart.some((item) => item.id === id)
    },

    totalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        const course = coursesRecommended.find((c) => c.id === item.id)
        if (!course) return total

        const price = Number(course.newPrice.replace('$', ''))
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
      localStorage.setItem('cartVueX', JSON.stringify(state.cart))
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
