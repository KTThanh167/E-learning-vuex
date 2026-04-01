<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="card p-[20px] bg-white rounded-[20px] flex flex-col hover:scale-105 transition duration-700 ease-in-out cursor-pointer lg:w-[316px] shadow-sm"
  >
    <div class="card-header">
      <img
        class="rounded-[20px] aspect-[16/9] w-full object-cover"
        :src="props.course.img"
        alt="course cover"
      />
      <p
        class="font-medium text-[15px] lg:text-[24px] text-[rgba(37,38,65,1)] pt-[12px] line-clamp-2"
      >
        {{ props.course.title }}
      </p>
    </div>

    <div class="card-body pt-[10px]">
      <div class="card-user flex items-center gap-[15px] pb-[25px]">
        <img class="w-[42px] h-[42px] rounded-full" :src="props.course.userImg" alt="avatar" />
        <span class="font-medium text-[12px] lg:text-[18px]">{{ props.course.userName }}</span>
      </div>

      <div
        class="w-full h-[8px] rounded-full overflow-hidden"
        :style="{
          background: `linear-gradient(to right, rgba(73,187,189,1) ${props.course.percent}%, rgba(217,217,217,1) ${props.course.percent}%)`,
        }"
      ></div>
    </div>

    <div
      class="card-footer text-[rgba(0,0,0,0.5)] font-semibold text-[10px] lg:text-[14px] pt-[12px] self-end"
    >
      Lesson {{ props.course.studiedLesson }} of {{ props.course.totalLesson }}
    </div>
  </div>
</template>
