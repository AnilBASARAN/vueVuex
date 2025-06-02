<template>
  <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
  methods: {
    addTwo() {
      this.$store.commit({
        type: 'increment',
        value: 2,
      });
    },
  },
};
</script>
