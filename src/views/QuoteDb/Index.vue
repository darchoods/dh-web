<template>
  <two-columns>
    <template #side>
      <QDBNav />
    </template>

    <div class="flex flex-row justify-between mb-4">
      <Header3 text="Random Quotes" />
    </div>
    <div class="flex flex-wrap gap-x-10" v-if="!loading">
      <Quote v-for="quote in quotes" :quote="quote" :channel="true" />
    </div>
    <div class="flex flex-wrap gap-x-10" v-else>
      <ContentBlock v-for="i in 6" :loading="loading" class="w-full lg:w-[46%] xl:w-[48%]" />
    </div>
  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import QDBNav from './QDBNav.vue';
import Quote from './Quote.vue';

export default {
  name: 'QDBIndex',
  components: {
    QDBNav, Quote
  },
  
  data() {
    return {
      loading: false,
    };
  },

  created() {
    this.loading = true;
    this.$store.dispatch('qdb/getRandom')
      .then(() => {
        this.loading = false;
      });
  },

  computed: {
    ...mapGetters({
      quotes: 'qdb/random',
    }),
  }
};
</script>
