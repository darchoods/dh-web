<template>
  <two-columns>
    <div class="flex flex-col w-full min-w-sm md:w-3/6 justify-center py-12 px-4 sm:px-6 lg:flex-none">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <div class="flex w-full">
            <Alert v-if="accountActivated" type="success" class="w-full">
              Your account has been activated. Please login.
            </Alert>
            <Alert v-if="invalidAccountCode" type="error" class="w-full">
              Invalid code. Your account could not be activated.
            </Alert>
            <Alert v-if="emailActivated" type="success" class="w-full">
              Your email address has been updated. Please login with your new
              email address.
            </Alert>
            <Alert v-if="invalidEmailCode" type="error" class="w-full">
              Invalid code. Your email address could not be changed.
            </Alert>
            <Alert v-if="passwordReset" type="success" class="w-full">
              Your password has been reset. Please login.
            </Alert>
            <Alert v-if="accountDeleted" type="success" class="w-full">
              Your account has been deleted.
            </Alert>
            <Alert v-if="noAuthentication" type="error" class="w-full">
              You need to be authenticated.
            </Alert>
            <Alert v-if="sessionExpired" type="info" class="w-full">
              Your session expired. Please login again.
            </Alert>
            <Alert v-if="noAuthorization" type="danger" class="w-full">
              You do not have appropriate permissions to access that resource.
            </Alert>
          </div>
        </div>

        <div v-if="coreNotFound === false" class="mt-12">
          <form ref="login" class="space-y-6 text-sm" @submit.prevent="login">
            <Alert v-if="authStatus === 'error'" type="error">
              Credentials are invalid! Please try again!
            </Alert>
            <Alert v-if="authStatus === 'empty'" type="error">
              Credentials are required! Please try again!
            </Alert>
            <div>
              <EmailField
                v-model="form.username"
                name="username"
                autocomplete="username"
                required
                label="Username"
                float-label
                :hint="validationErrors.username"
              />
            </div>

            <div class="space-y-1">
              <PasswordField
                v-model="form.password"
                name="password"
                autocomplete="password"
                required
                label="Password"
                float-label
                :hint="validationErrors.password"
              />
            </div>

            <div>
              <Btn type="submit">
                Sign In
              </Btn>
            </div>

            <div class="flex items-center justify-between">
              <router-link
                :to="{ name: 'register' }"
                class="font-medium text-portal-orange hover:text-portal-orange-600"
              >
                Create an account
              </router-link>
              <router-link
                :to="{ name: 'forgotten-password' }"
                class="font-medium text-portal-orange hover:text-portal-orange-600"
              >
                Forgot your password?
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </two-columns>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Login',

  data() {
    return {
      env: null,
      form: {
        username: '',
        password: '',
      },

      validationErrors: {},
    };
  },

  methods: {
    login() {
      this.validationErrors = {};
      if (this.form.username.length === 0) {
        console.log('[LOGIN] username is empty');
        this.validationErrors.username = 'The username field is required.';
      }
      if (this.form.password.length === 0) {
        console.log('[LOGIN] password is empty');
        this.validationErrors.password = 'The password field is required.';
      }

      if (Object.keys(this.validationErrors).length) {
        this.authStatus = 'empty';
        return;
      }

      this.$store.dispatch('user/login', this.form)
        .then(() => {
          this.$router.push({ name: 'index' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    ...mapFields('user', {
      authStatus: 'status',
      error: 'error',
    }),
  },
};
</script>
