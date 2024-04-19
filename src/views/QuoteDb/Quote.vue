<template>
  <ContentBlock class="w-full lg:w-[46%] xl:w-[48%]">
    <template #header>
      <div class="flex flex-wrap py-2	">
        <div class="flex text-lg px-4 font-thin"><span class="mr-1">Quote#{{ quote.quote_id }}</span><span v-if="channel"> | {{ quote.channel.channel }}</span></div>
      </div>
    </template>
    <div class="flex flex-col w-full">
      <blockquote class="flex w-full p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white overflow-auto">{{ quote.content }}</p>
      </blockquote>
      <div class="flex flex-col  justify-end">
        <div class="flex ml-auto">
          - Submitted by {{ quote.author }}
        </div>
        <div class="flex ml-auto">
          - Submitted {{ quote.created.fuzzy }}
        </div>
      </div>
    </div>
  </ContentBlock>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    quote: {
      type: Object,
      required: true
    },
    channel: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
};
</script>