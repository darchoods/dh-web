<template>
  <Heading
    :level="2"
    class="heading"
  >
    {{ text }}
  </Heading>
</template>

<script>
export default {
  name: 'Header2',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Header',
    }
  }
};
</script>
