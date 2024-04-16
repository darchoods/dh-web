<template>
  <nav>
    <ul class="flex flex-row">
      <li 
        v-for="row in nav_left" 
        :key="row.route" 
        class="flex"
        :class="{
          'active': row.group === this.$route.meta.group
        }"
      >
        <router-link :to="{ name: row.route }">{{ row.link }}</router-link>
      </li>
    </ul>
    <ul v-if="isAuthenticated && Object.keys(user).length" class="flex flex-row">
      <li 
        class="flex"
        :class="{
          'active': 'settings' === this.$route.meta.group
        }"
      >
        <router-link :to="{ name: 'index' }">Settings</router-link>
      </li>
      <li 
        class="flex"
        :class="{
          'active': 'settings' === this.$route.meta.group
        }"
      >
        <router-link :to="{ name: 'logout' }">Signout ({{ user.screenname }})</router-link>
        <img :src="avatar" :alt="user.screenname + '\'s Avatar'">
      </li>
    </ul>
    <ul v-else class="flex flex-row">
      <li 
        class="flex"
        :class="{
          'active': 'login' === this.$route.meta.group
        }"
      >
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ThemeNavigation',

  data() {
    return {
      nav_left: [
        {
          route: 'index',
          link: 'Home',
        },
        {
          route: 'index',
          link: 'Heartbeat',
          group: 'heartbeat',
        },
        {
          route: 'index',
          link: 'Channels',
          group: 'channels',
        },
        {
          route: 'qdb',
          link: 'QuoteDB',
          group: 'qdb',
        },
        {
          route: 'index',
          link: 'APIs',
          group: 'apis',
        },
      ],
    };
  },

  created() {

  },

  computed: {
    ...mapGetters('user', ['isAuthenticated']),
    ...mapGetters('user', { user: 'getProfile' }),

    avatar() {
      let avatarUrl = new URL(this.user.avatar);
      avatarUrl.searchParams.set('s', '44');

      return avatarUrl;
    },
  },
};
</script>
