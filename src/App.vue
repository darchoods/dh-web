<template>
  <div id="app" class="flex w-full items-center justify-center">
    <RouterView />
    <Breakpoints />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import axios from 'axios';
import DebugFlag from '@/helpers/DebugFlag';

export default {
  name: 'App',

  beforeMount() {
    this.$store.dispatch('app/initTheme');
  },

  computed: {
    ...mapFields('app', [
      'theme',
    ]),
  },

  watch: {
    theme(newTheme) {
      if (DebugFlag('store')) {
        console.log('[THEME] watch '+newTheme);
      }
      newTheme.toLowerCase() === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark');
    },
  },
};
</script>
