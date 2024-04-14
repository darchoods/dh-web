<template>
  <Heading
    :level="5"
    class="heading"
  >
    {{ text }}
  </Heading>
</template>

<script>
export default {
  name: 'Header5',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Header',
    }
  }
};
</script>
