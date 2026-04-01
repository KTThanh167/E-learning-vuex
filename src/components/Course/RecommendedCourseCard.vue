<script setup>
import { useStore } from 'vuex'

const { course } = defineProps({
  course: {
    type: Object,
    required: true,
  },
})

const store = useStore()

const handleCart = () => {
  store.dispatch('toggleCart', course)
}
</script>

<template>
  <div
    class="card flex flex-col bg-white shadow-[0px_18.83px_47.08px_0px_rgba(47,50,125,0.1)] rounded-[20px] p-[20px] h-full hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
  >
    <div class="card-header flex flex-col self-center">
      <div
        class="img rounded-[20px] overflow-hidden max-w-[167px] lg:max-w-[222px] justify-center items-center w-full"
      >
        <img class="w-full object-cover" :src="course.img" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-between mt-[20px]">
      <div class="design flex items-center gap-[10px]">
        <img src="../../assets/img/Icon/design.png" alt="" />
        <p class="text-[rgba(105,105,132,1)] font-medium text-[14px]">Design</p>
      </div>
      <div class="time flex items-center gap-[10px]">
        <img src="../../assets/img/Icon/time.png" alt="" />
        <p class="text-[rgba(105,105,132,1)] font-medium text-[14px]">{{ course.time }}</p>
      </div>
    </div>
    <div class="card-body mt-[20px] flex flex-col gap-[20px] flex-1">
      <div class="title line-clamp-2">
        <p class="text-[rgba(37,38,65,1)] font-medium text-[15px] lg:text-[24px]">
          {{ course.title }}
        </p>
      </div>
      <div class="desc flex-1">
        <p class="text-[rgba(105,105,132,1)]">{{ course.desc }}</p>
      </div>
    </div>
    <div class="card-footer pt-[17px] flex justify-between items-center">
      <div class="user flex items-center gap-[10px]">
        <img class="w-[44px] h-[44px]" :src="course.userAvt" alt="" />
        <p class="font-medium text-[18px]">{{ course.userName }}</p>
      </div>
      <div class="price flex gap-[10px]">
        <p class="text-[rgba(0,0,0,0.5)] italic line-through font-light text-[18px] self-center">
          {{ course.oldPrice }}
        </p>
        <p class="text-primary font-bold text-[24px]">{{ course.newPrice }}</p>
      </div>
    </div>
    <div
      class="mt-[15px] p-3 text-white text-center font-bold text-[18px] rounded-[20px]"
      :class="store.getters.isInCart(course.id) ? 'bg-red-400' : 'bg-primary'"
    >
      <button
        @click="handleCart"
        class="w-full py-2 rounded-lg text-white"
        :class="store.getters.isInCart(course.id) ? 'bg-red-400' : 'bg-primary'"
      >
        {{ store.getters.isInCart(course.id) ? 'Remove' : 'Add to cart' }}
      </button>
    </div>
  </div>
</template>
