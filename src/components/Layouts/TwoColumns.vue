<template>
  <div
    ref="two-columns"
    class="flex flex-col w-full items-center justify-center"
  >
    <ThemeHeader class="flex w-full items-center justify-center mt-[-20px] md:mt-2" />
    <ThemeNavigation class="flex flex-row w-full md:w-10/12 justify-between bg-[#1E1E1E] mt-[-20px] border-t-none border-b-[5px] border-b-[#006499]" />
    <div class="flex flex-col md:flex-row w-full md:w-[86.5%] lg:w-[86%] xl:w-[85%] justify-between pt-8">
      <slot name="above" />
      <main ref="column-one" class="flex flex-col w-full md:w-9/12 px-4">
        <slot />
      </main>
      <aside class="flex flex-col w-full md:w-4/12 xl:w-3/12 px-4">
        <slot name="side" />
      </aside>
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
