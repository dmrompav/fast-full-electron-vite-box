<template lang='pug'>
h3 HomeView

Table(
  :columns='columns'
  :data='data'
)
</template>

<script setup lang='ts'>
const columns = [
  { title: 'Title', key: 'title' },
  { title: 'Login', key: 'login' },
  { title: 'Password', key: 'password' },
  { title: 'Description', key: 'description' }
];
const data = []
</script>

<style lang='sass'>
</style>
