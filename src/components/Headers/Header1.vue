<template>
  <Heading
    :level="1"
    class="heading"
  >
    {{ text }}
  </Heading>
</template>

<script>
export default {
  name: 'Header1',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Header',
    }
  }
};
</script>
