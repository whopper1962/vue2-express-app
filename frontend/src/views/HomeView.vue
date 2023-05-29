<template>
  <div>
    <button class="btn btn-primary" @click="api()">Hello</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: "Hello",
    };
  },
  methods: {
    api () {
      this.axios.get("");
    }
  }
};
</script>
