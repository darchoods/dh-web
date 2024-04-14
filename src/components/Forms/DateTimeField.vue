<template>
  <TextField
    type="datetime-local"
    :name="name"
    :value="value"
    :label="label"
    :float-label="floatLabel"
    :disabled="disabled"
    :disabled-text="disabledText"
    :hint="hint"
    :min="min"
    :max="max"
    :prefix-text="prefixText"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: "DateTimeField",
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
    min: {
      type: String,
      required: false,
      default: '',
    },
    max: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value);
    },
  },
};
</script>
