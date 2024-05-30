<template>
  <div class="flex flex-col w-64 h-32 rounded-xl text-white p-4 bg-gray-700">
    <div>{{ channel.channel }}</div>
    <div>User Count: {{ channel.user_count }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChannelCard',
  props: {
    channel: {
      type: Object,
      required: true,
    },
  },
}
</script>