<template>
  <Heading
    :level="3"
    class="heading"
  >
    {{ text }}
  </Heading>
</template>

<script>
export default {
  name: 'Header3',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Header',
    }
  }
};
</script>
