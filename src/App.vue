<script setup lang='ts'>
import { onMounted } from 'vue';
import { loaderOff } from '@/utils/loaderOff';

onMounted(() => {
  loaderOff();
});
</script>

<template lang='pug'>
RouterView
</template>

<style scoped lang='sass'>

</style>
