<template>
  <div class="flex flex-col bg-white mb-6 rounded shadow">
    <header id="header" class="flex -mx-[10px] shadow-lg">
      <div class="text-xl py-2 px-4">
        {{ header }}
      </div>
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
  },

};
</script>
