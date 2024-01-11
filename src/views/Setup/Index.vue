<template>
  <two-columns>

  </two-columns>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'SetupIndex',

  beforeMount() {

  },

  methods: {
    getValue(variable) {
      if (Object.keys(this.setup).length === 0) { return '0'; }
      return this.setup[variable].toString();
    },
  },

  computed: {
    ...mapFields('dashboard', ['setup']),
  },
};
</script>
