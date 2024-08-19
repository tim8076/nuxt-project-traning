<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint voluptates consequuntur quos molestias
      saepe ab asperiores nulla dolorum alias?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint voluptates consequuntur quos molestias
      saepe ab asperiores nulla dolorum alias?</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/USD')
console.log(data)
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
  font-size: 36px;
}

p {
  padding: 20px 0;
}
</style>