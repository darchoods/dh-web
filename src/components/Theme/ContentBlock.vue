<template>
  <div v-if="loading" class="flex flex-col bg-white mb-6 rounded shadow">
    <header id="header" class="flex -mx-[10px] shadow-lg">
      <slot name="header">
        <div class="text-xl w-full py-2 px-4 h-10 skeleton-box">
          Loading...
        </div>
      </slot>
    </header>
    <div class="flex w-full p-2 h-10">
      &nbsp;...
    </div>
  </div>
  <div v-else class="flex flex-col bg-white mb-6 rounded shadow">
    <header id="header" class="flex -mx-[10px] shadow-lg">
      <slot name="header">
        <div class="text-xl py-2 px-4">
          {{ header }}
        </div>
      </slot>
    </header>
    <div class="flex p-2">
      <slot />
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: {
    header: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },

};
</script>
