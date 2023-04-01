<template lang='pug'>
Table.custom-class(
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
const data = [];

// const addRow = (params) => {};
// function removeRow() {};
</script>

<style lang='sass'>

</style>
