<template>
  <div class="flex flex-col">
    <ContentBlock :loading="loading" header="QDB Channel List">
      <div class="flex flex-col w-full">
        <ul>
          <li v-for="channel in channels">
            <div 
              class="flex p-1 w-full rounded cursor-pointer hover:bg-gray-900/10" 
              :class="{ 
                'bg-gray-900/10': $route.params.channel === channel.channel 
              }"
              @click="gotoChannel(channel.channel)"
            >
              <div class="flex text-lg">{{ channel.channel }}</div>
              <div class="flex ml-auto select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">{{ channel.quote_count }}</div>
            </div>
          </li>
        </ul>
      </div>
    </ContentBlock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'QDBNav',
  
  data() {
    return {
      loading: false
    };
  },

  created() {
    this.loading = true;
    this.$store.dispatch('qdb/getChanlist')
      .then(() => {
        this.loading = false;
      });
  },

  methods: {
    gotoChannel(channel) {
      this.$router.push({ name: 'qdb.channel', params: { channel } });
    }
  },

  computed: {
    ...mapGetters({
      channels: 'qdb/channels',
    }),
  }
};
</script>