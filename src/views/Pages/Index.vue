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

    <template #header>
      <Header3 text="Site News" />
    </template>

    <ContentBlock v-if="Object.keys(news).length" v-for="post in news">
      <template #header>
        <div class="flex flex-col py-2">
          <div class="flex flex-col sm:flex-row w-full mb-2 sm:mb-0 text-sm px-4 font-thin h-12 sm:h-auto truncate">
            <span class="text-blue-400 text-xl sm:mr-1 truncate w-64 sm:w-auto">{{ post.title }}</span>
            <span class="sm:mt-2"> by {{ post.author }}</span>
          </div>
          <div class="flex text-sm px-4 font-thin">Published on {{ post.created_at.fuzzy }}</div>
        </div>
      </template>
      <p v-html="parseMarkdown(post.content)" />
    </ContentBlock>
    <div v-else>
      <ContentBlock :loading="true" /> 
      <ContentBlock :loading="true" /> 
      <ContentBlock :loading="true" /> 
    </div>
  </two-columns>
</template>

<script>
import { mapGetters } from 'vuex';
import { can } from '@/helpers/Permissions';
import markdown from '@/helpers/Markdown';

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
    parseMarkdown(content) {
      return markdown(content);
    },
  },

  computed: {
    ...mapGetters({
      news: 'news/posts',
    }),
  }
};
</script>
