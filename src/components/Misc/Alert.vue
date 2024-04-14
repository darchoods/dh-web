<template>
  <div class="alert w-full p-4 rounded-md border-l-4" :class="classes" role="alert">
    <p class="font-bold mb-0">
      {{ title }}
    </p>
    <p class="text-sm mb-0">
      <slot />
    </p>
  </div>
</template>

<script>
import AlertTypes from '../../helpers/Enum/Alerts.js';

export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return value.toUpperCase() in AlertTypes;
      },
    },
  },

  data () {
    return {
      alertTypes: {
        DEFAULT: {
          title: AlertTypes.DEFAULT,
          classes:
            'bg-slate-200 border-slate-500 text-slate-700 ' +
            'dark:bg-slate-600 dark:border-slate-400 dark:text-slate-100',
        },
        INFO: {
          title: AlertTypes.INFO,
          classes:
            'bg-cyan-200 border-cyan-500 text-cyan-700 ' +
            'dark:bg-cyan-800 dark:border-cyan-600 dark:text-cyan-100',
        },
        SUCCESS: {
          title: AlertTypes.SUCCESS,
          classes:
            'bg-lime-200 border-lime-500 text-lime-700 ' +
            'dark:bg-lime-800 dark:border-lime-600 dark:text-lime-100',
        },
        WARNING: {
          title: AlertTypes.WARNING,
          classes:
            'bg-amber-200 border-amber-500 text-amber-700 ' +
            'dark:bg-amber-800 dark:border-amber-600 dark:text-amber-100',
        },
        ERROR: {
          title: AlertTypes.ERROR,
          classes:
            'bg-red-200 border-red-500 text-red-700 ' +
            'dark:bg-red-800 dark:border-red-600 dark:text-red-200',
        },
      },
    };
  },

  computed: {
    classes () {
      return this.alertTypes[this.type.toUpperCase()].classes;
    },
    title () {
      return this.alertTypes[this.type.toUpperCase()].title;
    },
  },
};
</script>
