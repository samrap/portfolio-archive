<template>
  <div>
    <div class="fixed z-50 pin-t pin-r p-3 md:p-6 bg-black">
      <button
        id="menuToggle"
        class="hamburger hamburger--minus"
        :class="active ? 'is-active' : ''" type="button"
        @click="toggle">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <nav
      id="menu"
      class="flex justify-center items-center fixed z-40 pin-t pin-l w-full overflow-hidden bg-white opacity-90 transition-350"
      :class="active ? 'h-full' : 'h-0'">
      <ul class="list-reset text-center">
        <li class="my-2">
          <a href="/" class="block py-2 font-bold text-4xl text-black">Home</a>
        </li>
        <li>
          <a href="/now.html" class="block py-2 font-bold text-4xl text-black">Now</a>
        </li>
        <li>
          <a target="_blank" href="https://linkedin.com/in/samrapdev" class="block py-2 font-bold text-4xl text-black">LinkedIn</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/samrap" class="block py-2 font-bold text-4xl text-black">GitHub</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        active: false,
      }
    },
    methods: {
      toggle() {
        this.active = ! this.active;
      }
    }
  }
</script>
