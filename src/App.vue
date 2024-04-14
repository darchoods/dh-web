<template>
  <div id="app" class="flex w-full items-center justify-center">
    <RouterView />
    <Breakpoints />
  </div>
</template>

<script>
export default {
  name: 'App',

  beforeMount() {
    if (localStorage.getItem('user-token') !== null) {
      this.$store.dispatch('user/setTokenFromLS')
        .then(() => {
          this.$store.dispatch('user/loadProfile');
        });      
    }
  }
};
</script>
