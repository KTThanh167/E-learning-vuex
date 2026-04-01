<script setup>
const props = defineProps({
  coaching: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <div class="bg-[rgba(37,38,65,1)] flex flex-col items-center rounded-[37px] mt-[200px]">
    <p class="text-white font-semibold text-[18px] lg:text-[36px] mt-[70px]">
      {{ props.coaching.title }}
    </p>
    <p
      class="text-center max-w-[830px] text-white font-normal text-[12px] lg:text-[24px] mt-[30px]"
    >
      {{ props.coaching.desc }}
    </p>
    <button
      class="text-white px-[40px] py-[20px] bg-primary mt-[70px] rounded-[12px] mb-[80px] hover:scale-105 transition duration-700 ease-in-out"
    >
      {{ props.coaching.button }}
    </button>
  </div>
</template>
