<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">{{ $t('message.count') }} {{ count }}</button>
    <p>
      {{ $t('message.edit') }}
      <code>components/HelloWorld.vue</code> {{ $t('message.testhmr') }}
    </p>
  </div>

  <p>
    {{ $t('message.checkout') }}
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, {{ $t('message.officialstarter') }}
  </p>
  <p>
    {{ $t('message.install') }}
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    {{ $t('message.volarinstall') }}
  </p>
  <p class="read-the-docs">{{ $t('message.learnmore') }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
