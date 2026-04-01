<script setup>
import { ref } from 'vue'
import LearningProgressCard from '../components/Course/LearningProgressCard.vue'
import CategoryCard from '../components/Course/CategoryCard.vue'
import RecommendedCourseCard from '../components/Course/RecommendedCourseCard.vue'
import Content2Component from '@/components/Course/MembershipBanner.vue'
//Import data
import { courseCategory } from '@/data/Course/CategoryCourse'
import { courseList } from '@/data/Course/LearningProgress'
import { coaching } from '@/data/Course/OnlineCoaching'
import { coursesRecommended } from '@/data/Course/RecommendedCourse'
const courseCategoryList = ref(courseCategory)
const learningProgressList = ref(courseList)
const coachingObject = ref(coaching)
const coursesRecommendedList = ref(coursesRecommended)
</script>

<template>
  <div class="hero-section w-100%">
    <!-- LearningProgress -->
    <div class="bg-[rgba(157,204,255,0.2)] pt-[25px] pb-[28px] lg:pt-[50px] lg:pb-[57px]">
      <div class="container flex flex-col">
        <div class="flex justify-between">
          <p class="font-semibold text-[rgba(37,38,65,1)] text-[18px] lg:text-[36px]">
            Welcome back, ready for your next lesson?
          </p>
          <button class="text-primary font-bold text-[10px] lg:text-[20px]">View history</button>
        </div>
        <div class="pt-[25px] lg:pt-[50px] grid gap-[15px] lg:grid-cols-3 lg:gap-[50px]">
          <LearningProgressCard
            v-for="item in learningProgressList"
            :key="item.id"
            :course="item"
          />
        </div>
        <div class="self-end pt-[25px] lg:pt-[50px] flex gap-[10px] lg:gap-[20px]">
          <button>
            <img
              class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]"
              src="../assets/img/Icon/angle-left.png"
              alt=""
            />
          </button>
          <button>
            <img
              class="bg-primary py-[11px] px-[20px]"
              src="../assets/img/Icon/angle-right.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    <!-- Category course -->
    <div class="container">
      <div class="pt-[40px] lg:pt-[80px]">
        <p class="text-[rgba(37,38,65,1)] font-semibold text-[20px] lg:text-[36px]">
          Choice favourite course from top category
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[80px] pb-[100px]">
        <CategoryCard v-for="(item, index) in courseCategoryList" :key="index" :course="item" />
      </div>
    </div>
    <!-- Recommended course -->
    <div class="bg-[rgba(157,204,255,0.2)]">
      <div class="container flex flex-col">
        <div class="pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Recommended for you</p>
          <button class="text-primary font-bold text-[15px] lg:text-[20px]">See all</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px]">
          <RecommendedCourseCard
            v-for="item in coursesRecommendedList"
            :key="item.id"
            :course="item"
          />
        </div>
        <div class="pb-[113px] self-end pt-[25px] lg:pt-[50px] flex gap-[10px] lg:gap-[20px]">
          <button class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]">
            <img src="../assets/img/Icon/angle-left.png" alt="" />
          </button>
          <button class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]">
            <img src="../assets/img/Icon/angle-right.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <!-- Choice your course -->
    <div class="container">
      <div class="flex flex-col">
        <div class="pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Get choice of your course</p>
          <button class="text-primary font-bold text-[15px] lg:text-[20px]">See all</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]">
          <RecommendedCourseCard
            v-for="item in coursesRecommendedList"
            :key="item.id"
            :course="item"
          />
        </div>
      </div>
    </div>
    <!-- Online coaching -->
    <div class="container">
      <Content2Component :coaching="coachingObject"></Content2Component>
    </div>
    <!-- development course -->
    <div class="container">
      <div class="flex flex-col">
        <div class="pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">The course in personal development</p>
          <button class="text-primary font-bold text-[15px] lg:text-[20px]">See all</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]">
          <RecommendedCourseCard
            v-for="item in coursesRecommendedList"
            :key="item.id"
            :course="item"
          />
        </div>
      </div>
    </div>
    <!-- student viewing -->
    <div class="bg-[rgba(157,204,255,0.2)]">
      <div class="container flex flex-col">
        <div class="pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Student are viewing</p>
          <button class="text-primary font-bold text-[15px] lg:text-[20px]">See all</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]">
          <RecommendedCourseCard
            v-for="item in coursesRecommendedList"
            :key="item.id"
            :course="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
