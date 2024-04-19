<template>
  <two-columns>
    <template #side>
      <QDBNav />
    </template>

    <template #header>
      <div class="flex flex-row justify-between mb-4 w-full">
        <div class="flex">
          <Header3 :text="$route.params.channel + '\'s Quotes'" />
        </div>
        <div class="flex" v-if="Object.keys(response).length">
          <Pagination :data="response?.quotes" :limit="6" @pagination-change-page="fetchData" />
        </div>
      </div>
    </template>

    <div v-if="Object.keys(response).length">
      <div class="flex flex-wrap gap-x-10">
        <Quote v-for="quote in response?.quotes.data" :quote="quote" />
      </div>
    </div>
    <div v-else>
      <div class="flex flex-wrap gap-x-10">
        <ContentBlock v-for="i in 6" :loading="true" class="w-full lg:w-[46%] xl:w-[48%]" />
      </div>
    </div>
  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import Quote from './Quote.vue';
import QDBNav from './QDBNav.vue';
import ApiService from '@/helpers/ApiService';

export default {
  name: 'QDBChannel',
  components: {
    QDBNav, Quote
  },

  data() {
    return {
      page: 1,
      response: {},
    };
  },

  mounted() {
    this.fetchData(1);
  },

  methods: {
    fetchData(page) {
      this.response = {};
      ApiService.qdbByChannel({
          channel: this.$route.params.channel,
          number: 6,
          page: page
        },
        (response) => {
          this.response = response.data.response;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  },

  watch:{
    $route (to, from){
      this.fetchData(1);
    }
  }
};
</script>
