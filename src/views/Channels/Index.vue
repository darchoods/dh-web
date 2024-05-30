<template>
  <two-columns>
    <template #header>
      <div class="flex flex-row items-baseline ">
        <Header3 text="Network Channel List" /> 
      </div>
    </template>

    <div class="flex flex-row flex-wrap gap-4">
      <ChannelCard v-for="channel in channels" :channel="channel" />
    </div>

  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import ChannelCard from './ChannelCard.vue';

export default {
  name: 'ChannelIndex',
  components: {
    ChannelCard,
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
      this.$store.dispatch('irc/getChanlist')
        .then(() => {
          this.loading = false;
        })
      ;
    },
  },

  computed: {
    ...mapGetters({
      channels: 'irc/channels',
    }),
  }
};
</script>
