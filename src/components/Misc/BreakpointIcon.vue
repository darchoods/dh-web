<template>
  <span class="mx-2 my-auto svg-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      :viewBox="svgIcon.svgViewBox"
      class="relative text-white fill-current"
      :width="size"
      :height="size"
      v-html="svgIcon.path"
    />
  </span>
</template>

<script>
import { icons } from '@/helpers/Utilities/icons.js';

export default {
  name: 'BreakpointIcon',
  props: {
    name: {
      type: String,
      default: 'svg-model',
    },
    size: {
      type: Number,
      default: 35,
    },
  },
  computed: {
    svgIcon() {
      return icons[this.name];
    },
  },
};
</script>
