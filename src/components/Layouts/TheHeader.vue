<script setup>
import { ref, computed } from 'vue'
import '@/assets/main.css'
import { useStore } from 'vuex'

const navMenu = ref(false)
const store = useStore()

const cartTotalItems = computed(() => store.getters.totalItems)

const handleMenu = () => {
  navMenu.value = !navMenu.value
}
</script>

<template>
  <div class="header bg-white">
    <!-- LOGO -->
    <div class="header_logo">
      <img src="../../assets/img/Icon/logo.png" alt="logo" />
    </div>

    <!-- MENU DESKTOP -->
    <div class="hidden lg:block">
      <ul class="flex gap-10">
        <li class="menu-item">Home</li>
        <li class="menu-item">Course</li>
        <li class="menu-item">Careers</li>
        <li class="menu-item">Blog</li>
        <li class="menu-item">About Us</li>
      </ul>
    </div>

    <!-- MENU TABLET -->
    <div class="hidden md:block lg:hidden">
      <ul class="flex gap-6">
        <li class="menu-item-tablet">Home</li>
        <li class="menu-item-tablet">Course</li>
        <li class="menu-item-tablet">Careers</li>
        <li class="menu-item-tablet">Blog</li>
        <li class="menu-item-tablet">About Us</li>
      </ul>
    </div>

    <!-- MENU MOBILE -->
    <div class="menu md:hidden">
      <div class="menu-icon">
        <font-awesome-icon :icon="navMenu ? 'x' : 'bars'" @click="handleMenu" />
      </div>

      <div class="menu-nav" v-if="navMenu">
        <ul class="nav-link flex flex-col">
          <li>Home</li>
          <li>Course</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>

    <!-- RIGHT SIDE (CART + USER) -->
    <div class="flex items-center gap-5">
      <!-- CART -->
      <router-link to="/cart">
        <div class="relative cursor-pointer">
          <font-awesome-icon icon="cart-shopping" class="text-[20px] lg:text-[26px]" />

          <!-- BADGE -->
          <span
            v-if="cartTotalItems > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] lg:text-[12px] px-2 rounded-full"
          >
            {{ cartTotalItems }}
          </span>
        </div>
      </router-link>

      <!-- AVATAR -->
      <div class="header_avt">
        <img src="../../assets/img/Avatar/heading-avatar.png" alt="avt" />
        <p class="text-[rgba(0,0,0,1)] text-[20px] lg:text-[40px] font-medium">Lina</p>
        <font-awesome-icon icon="angle-down" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Reusable menu styles */
.menu-item {
  @apply text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal;
}

.menu-item-tablet {
  @apply text-gray-500 text-[25px] hover:scale-105 transition duration-500 ease-in-out font-normal;
}

.menu {
  position: relative;
  cursor: pointer;
}

.menu-nav {
  position: absolute;
  top: 60px;
  transform: translateX(-45%);
  background: #eee;
  padding: 10px;
  border-radius: 6px;
  white-space: nowrap;
}

.nav-link {
  gap: 5px;
}

.header_avt {
  display: flex;
  align-items: center;
  gap: 7px;
}
</style>
