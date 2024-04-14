<template>
  <Heading
    :level="4"
    class="heading"
  >
    {{ text }}
  </Heading>
</template>

<script>
export default {
  name: 'Header4',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Header',
    }
  }
};
</script>
