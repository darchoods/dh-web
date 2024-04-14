<template>
  <TextField
    type="password"
    :name="name"
    :value="value"
    :label="label"
    :float-label="floatLabel"
    :disabled="disabled"
    :disabled-text="disabledText"
    :hint="hint"
    :prefix-text="prefixText"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: "PasswordField",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    floatLabel: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    disabledText: {
      type: String,
      required: false,
      default: '',
    },
    hint: {
      type: String,
      required: false,
      default: '',
    },
    prefixText: {
      type: String,
      required: false,
      default: '',
    },
    pattern: {
      type: String,
      required: false,
      default: () => '(.*?)',
    },
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value);
    },
  },
};
</script>
