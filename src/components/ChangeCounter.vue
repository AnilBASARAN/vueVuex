<template>
  <button @click="increase({ value: 15 })">Add 15</button>
  <button @click="inc">Add me 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    /*     addTwo() {
      this.$store.commit({
        type: 'increment',
        value: 2,
      });
    }, */
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
