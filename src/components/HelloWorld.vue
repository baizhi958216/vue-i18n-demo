<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t,locale } = useI18n() 

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">{{ t('message.count') }} {{ count }}</button>
    <button type="button" @click="locale = locale=='en'?'zh-CN':'en'">{{ t('switchlang') }}</button>
    <p>
      {{ t('message.edit') }}
      <code>components/HelloWorld.vue</code> {{ t('message.testhmr') }}
    </p>
  </div>

  <p>
    {{ t('message.checkout') }}
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, {{ t('message.officialstarter') }}
  </p>
  <p>
    {{ t('message.install') }}
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    {{ t('message.volarinstall') }}
  </p>
  <p class="read-the-docs">{{ t('message.learnmore') }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
select{
  width: 100px;
  height: 36px;
  border-radius: 6px;
  margin-left: 5px;
}
</style>
