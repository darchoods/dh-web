<template>
  <div
    v-if="forceDisplay ? true : isDevEnv"
    class="fixed flex justify-around helper screen-label"
    :class="[
      toggle ? 'bg-green-600 bg-opacity-75' : 'bg-green-600 bg-opacity-50',
      sneak
        ? 'bottom-0 left-0 p-2 rounded-tr-sm'
        : 'bottom-4 left-4 rounded-lg p-4',
    ]"
    @click="toggle = !toggle"
  >
    <div v-if="toggle">
      <div v-if="!sneak">
        <div class="flex sm:hidden">
          xs
          <BreakpointIcon name="xs" />
        </div>
        <div class="hidden sm:flex md:hidden">
          sm
          <BreakpointIcon name="sm" />
        </div>
        <div class="hidden md:flex lg:hidden">
          md
          <BreakpointIcon name="md" />
        </div>
        <div class="hidden lg:flex xl:hidden">
          lg
          <BreakpointIcon name="lg" />
        </div>
        <div class="hidden xl:flex 2xl:hidden">
          xl
          <BreakpointIcon name="xl" />
        </div>
        <div class="hidden 2xl:flex">
          2xl
          <BreakpointIcon name="2xl" />
        </div>
        <div
          v-if="pixels"
          class="flex mx-auto my-auto text-sm"
          style="width: max-content"
        >
          {{ screenWidth }} px
        </div>
      </div>
      <div v-else class="flex text-lg">
        <div class="flex sm:hidden">
          xs
        </div>
        <div class="hidden sm:flex md:hidden">
          sm
        </div>
        <div class="hidden md:flex lg:hidden">
          md
        </div>
        <div class="justify-around hidden lg:flex xl:hidden">
          lg
        </div>
        <div class="hidden xl:flex">
          xl
        </div>
        <div
          v-if="pixels"
          class="flex mx-auto my-auto ml-2 text-sm"
          style="width: max-content"
        >
          {{ screenWidth }} px
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreakpointIcon from './BreakpointIcon.vue';

export default {
  name: 'Breakpoints',
  components: { BreakpointIcon },

  props: {
    sneak: {
      type: Boolean,
      default: false,
    },
    pixels: {
      type: Boolean,
      default: true,
    },
    forceDisplay: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isDevEnv: process.env.NODE_ENV !== 'production',
      toggle: true,
      screenWidth: 0,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      let width = window.innerWidth;
      this.screenWidth = width;
    },
  },
};
</script>

<style lang="postcss" scoped>
.helper {
  z-index: 1000;
  @apply text-white font-bold text-xl uppercase transition-colors duration-300 shadow-md cursor-pointer;
}
.helper:hover {
  @apply bg-opacity-100;
}
.bottom-4 {
  bottom: 1rem;
}
.left-4 {
  left: 1rem;
}
</style>
