<template>
  <two-columns>
    <template #side>
      <QDBNav />
    </template>

    <template #header>
      <div class="flex flex-row items-baseline ">
        <Header3 text="Random Quotes" /> 
        <FA 
          :icon="['fas', 'rotate']" 
          @click="refresh" 
          class=" ml-2 text-xl cursor-pointer hover:text-gray-400 spin-slow duration-200 ease-in-out" 
          :class="{ 'motion-safe:animate-spin-medium animate-pulse': loading }"
          title="Refresh Quotes"
        />
      </div>
    </template>

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
    this.refresh();
  },

  methods: {
    refresh() {
      this.loading = true;
      this.$store.dispatch('qdb/getRandom')
        .then(() => {
          this.loading = false;
        })
      ;
    },
  },

  computed: {
    ...mapGetters({
      quotes: 'qdb/random',
    }),
  }
};
</script>
