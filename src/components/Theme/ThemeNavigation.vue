<template>
  <nav class="flex flex-row w-10/12 justify-between bg-[#1E1E1E] mt-[-20px] border-t-none border-b-[5px] border-b-[#006499]">
    <ul class="flex flex-row">
      <li 
        v-for="row in nav_left" 
        :key="row.route" 
        class="flex"
        :class="{
          'active': row.group === this.$route.meta.group
        }"
      >
        <a :href="row.route">{{ row.link }}</a>
      </li>
    </ul>
    <ul class="flex flex-row">
      <li 
        v-for="row in nav_right" 
        :key="row.route" 
        class="flex"
        :class="{
          'active': row.group === this.$route.meta.group
        }"
      >
        <a :href="row.route">{{ row.link }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ThemeNavigation',

  data() {
    return {
      nav_left: [
        {
          route: '/',
          link: 'Home',
        },
        {
          route: '/heartbeat',
          link: 'Heartbeat',
          group: 'heartbeat',
        },
        {
          route: '/channels',
          link: 'Channels',
          group: 'channels',
        },
        {
          route: '/qdb',
          link: 'QuoteDB',
          group: 'qdb',
        },
        {
          route: '/apis',
          link: 'APIs',
          group: 'apis',
        },
      ],
      nav_right: [],
    };
  },

  created() {
    if (this.$store.getters['user/isAuthenticated']) {
      this.nav_right.push({
        route: '/settings',
        link: 'Settings',
      });
      this.nav_right.push({
        route: '/logout',
        link: 'Signout',
      });
    } else {
      this.nav_right.push({
        route: '/login',
        link: 'Sign In',
      });
      // this.nav_right.push({
      //   route: '/register',
      //   link: 'Register',
      // });
    }
  },
};
</script>
