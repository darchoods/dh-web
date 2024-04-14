<template>
  <two-columns />
</template>

<script>
export default {
  name: 'Logout',

  beforeMount() {
    this.$store
      .dispatch('user/logout')
      .then(() => {
        this.$router.push({ name: 'index' });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
