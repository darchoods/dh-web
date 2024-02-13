<template>
  <div id="app" class="flex w-full items-center justify-center">
    <RouterView />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import DebugFlag from '@/helpers/DebugFlag';

export default {
  name: 'App',
};
</script>
