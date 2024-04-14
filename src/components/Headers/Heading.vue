<script>
import {h} from 'vue';

export default {
  props: {
    level: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  render() {
    return h(
      `h${this.level}`, // tag name
      {
        class: ''
      }, // attributes
      this.$slots.default() // array of children
    )
  },
};
</script>
