<template>
  <two-columns>
    <template #above>
      <Alert v-if="emailActivated" type="success">
        Your email address has been updated.
      </Alert>
      <Alert v-if="invalidEmailCode" type="error">
        Invalid code. Your email address could not be changed.
      </Alert>
      <Alert v-if="accountActivated" type="success">
        Your account has been activated.
      </Alert>
      <Alert v-if="invalidAccountCode" type="error">
        Invalid code. Your account could not be activated.
      </Alert>
    </template>

    <template #side>
      <RightNav />
    </template>

    <ContentBlock v-for="post in news">
      <template #header>
        <div class="flex flex-col py-2	">
          <div class="flex text-sm px-4 font-thin"><span class="text-blue-400 mr-1">{{ post.title }}</span> by {{ post.author }}</div>
          <div class="flex text-sm px-4 font-thin">Published on {{ post.created_at.fuzzy }}</div>
        </div>
      </template>
      <p>{{ post.content }}</p>
    </ContentBlock>
  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import { can } from '@/helpers/Permissions';

export default {
  name: 'PagesIndex',
  data() {
    return {
      accountActivated: this.$route.query['account-activated'] ? true : false,
      invalidAccountCode: this.$route.query['invalid-account-code'] ? true : false,
      emailActivated: this.$route.query['email-activated'] ? true : false,
      invalidEmailCode: this.$route.query['invalid-email-code'] ? true : false,
    };
  },

  created() {
    this.$store.dispatch('news/loadAll');
  },

  methods: {
    can,
  },

  computed: {
    ...mapGetters({
      news: 'news/posts',
    }),
  }
};
</script>
