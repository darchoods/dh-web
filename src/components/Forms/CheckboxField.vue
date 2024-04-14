<template>
  <div
    class="flex flex-row group field-wrapper select-none gap-3"
  >
    <input
      ref="inputValue"
      type="checkbox"
      :name="fieldName"
      :checked="checkedState"
      :disabled="disabled"
      :class="{
        'opacity-50 cursor-not-allowed': disabled,
        'checked': checkedState,
      }"
      @change="updateValue"
    >
    <label
      v-if="label"
      :for="fieldName"
      class="form-label mb-1"
      @click="toggleCheckbox"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: {
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: [Number, Boolean],
      default: () => false,
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
  },

  data() {
    return {
      focused: false,
      checkedState: false,
    };
  },

  mounted() {
    this.checkedState = this.checked;
  },

  methods: {
    updateValue() {
      const value = this.$refs.inputValue.checked;
      this.checkedState = value;
      this.$emit('input', this.checkedState);
    },
    toggleCheckbox() {
      const value = this.$refs.inputValue.checked;
      this.checkedState = !value;
      this.$emit('input', this.checkedState);
    },
  },

  computed: {
    fieldName() {
      return this.name || null;
    },
  },
};
</script>
