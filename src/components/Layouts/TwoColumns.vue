<template>
  <div
    ref="two-columns"
    class="flex flex-col w-full items-center justify-center"
  >
    <ThemeHeader />
    <ThemeNavigation />
    <div class="flex flex-row w-10/12 justify-between pt-8">
      <slot name="above" />
      <main ref="column-one" class="flex flex-col w-9/12 px-4">
        <slot />
      </main>
      <side class="flex flex-col w-3/12 px-4">
        <slot name="side" />
      </side>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoColumns',

  data() {
    return {
    };
  },
};
</script>
