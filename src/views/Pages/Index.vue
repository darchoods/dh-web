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
      <ContentBlock header="IRC Information">
        <p>To connect to Darchoods IRC network, you can use the following details.</p>
      </ContentBlock>
      <ContentBlock header="Users in #Darchoods">
        <ul>
          <li>~xLink</li>
          <li>@narada</li>
          <li>...</li>
        </ul>
      </ContentBlock>
    </template>

    <ContentBlock header="IRC Documentation">
      <p>Using the API you can access various statistics about the IRC Network. This api will return JSON regardless of headers set, this may change in the future if there is enough request for it.</p>
    </ContentBlock>
  </two-columns>
</template>

<script>
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
  methods: {
    can,
  },
};
</script>
