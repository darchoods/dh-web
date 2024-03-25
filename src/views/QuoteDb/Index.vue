<template>
  <two-columns>
    <template #side>
      <QDBNav />
    </template>

    <div class="flex flex-wrap gap-x-10">
      
      <ContentBlock v-for="quote in quotes" class=" w-[48%]">
        <template #header>
          <div class="flex flex-wrap py-2	">
            <div class="flex text-lg px-4 font-thin">Quote#{{ quote.quote_id }} | {{ quote.channel.channel }}</div>
          </div>
        </template>
        <div class="flex flex-col w-full">

          <blockquote class="flex w-full p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{{ quote.content }}</p>
          </blockquote>
          <div class="flex flex-col">
            <div class="flex ml-auto">
              - Submitted by {{ quote.author }}
            </div>
            <div class="flex ml-auto">
              - Submitted {{ quote.created.fuzzy }}
            </div>
          </div>
        </div>
      </ContentBlock>
    </div>
  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import QDBNav from './QDBNav.vue';
import { can } from '@/helpers/Permissions';

export default {
  name: 'QDBIndex',
  components: {
    QDBNav,
  },
  data() {
    return {
    };
  },

  created() {
    this.$store.dispatch('qdb/getRandom');
  },

  methods: {
    can,
  },

  computed: {
    ...mapGetters({
      quotes: 'qdb/random',
    }),
  }
};
</script>
