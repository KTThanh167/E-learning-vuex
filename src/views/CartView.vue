<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartItems = computed(() => store.getters.cartItems)

const isEmpty = computed(() => cartItems.value.length === 0)

const showConfirm = ref(false)
const selectedId = ref(null)

const openConfirm = (id) => {
  selectedId.value = id
  showConfirm.value = true
}

const confirmRemove = () => {
  store.dispatch('removeFromCart', selectedId.value)
  showConfirm.value = false
}

const cancelRemove = () => {
  showConfirm.value = false
}

const increaseCount = (id) => {
  store.dispatch('increaseCount', id)
}

const decreaseCount = (id) => {
  store.dispatch('decreaseCount', id)
}
</script>

<template>
  <div class="container py-[100px]">
    <h1 class="text-[30px] font-bold mb-[30px] pt-[50px]">Your Cart</h1>
    <button
      @click="$router.back()"
      class="text-white font-bold p-[20px] bg-primary mb-[30px] rounded-[10px] hover:scale-105 transition duration-300"
    >
      Back to Courses
    </button>

    <!-- EMPTY -->
    <div v-if="isEmpty" class="text-center py-[50px]">
      <p class="text-red-500 font-semibold text-[30px]">Your cart is empty.</p>
    </div>

    <!-- LIST -->
    <div v-else class="flex flex-col gap-[20px]">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center p-[20px] bg-white rounded-[10px] shadow"
      >
        <!-- LEFT -->
        <div class="flex items-center gap-[20px]">
          <img class="w-[100px] h-[70px] object-cover" :src="item.img" />
          <div>
            <p class="font-semibold text-[18px]">{{ item.title }}</p>
            <p class="text-gray-500 text-[14px]">{{ item.userName }}</p>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-[20px]">
          <!-- Tăng giảm số lượng khóa học muốn mua -->
          <div>
            <button
              @click="decreaseCount(item.id)"
              class="bg-gray-300 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-400"
            >
              -
            </button>
            <span class="bg-gray-200 text-gray-700 px-3 py-1"> {{ item.quantity }}</span>
            <button
              @click="increaseCount(item.id)"
              class="bg-gray-300 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-400"
            >
              +
            </button>
          </div>
          <p class="text-primary font-bold text-[18px]">
            ${{ Number(item.newPrice.replace('$', '')) * item.quantity }}
          </p>

          <button
            @click="openConfirm(item.id)"
            class="bg-red-500 text-white px-3 py-1 rounded hover:scale-105 transition duration-300"
          >
            Remove
          </button>
        </div>
        <!-- CONFIRM DELETE MODAL -->
        <div v-if="showConfirm" class="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div class="bg-white p-6 rounded-lg w-[300px] text-center">
            <p class="mb-4">Remove this course from cart?</p>

            <div class="flex justify-center gap-4">
              <button @click="confirmRemove" class="bg-red-500 text-white px-4 py-2 rounded">
                Yes
              </button>

              <button @click="cancelRemove" class="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TOTAL -->
      <div class="flex justify-end mt-[30px] mb-[30px]">
        <div class="bg-white p-[20px] rounded shadow w-[300px] flex justify-between">
          <div>
            <p class="text-[20px] font-semibold mb-[10px]">Total</p>
            <p class="text-[24px] font-bold text-primary">${{ store.getters.totalPrice }}</p>
          </div>
          <button
            class="bg-primary text-white font-bold p-[20px] rounded-[10px] hover:scale-105 transition duration-300"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
