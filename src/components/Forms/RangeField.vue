<template>
  <TextField
    type="range"
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
  name: "RangeField",
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
  },
  methods: {
    updateValue (value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>
