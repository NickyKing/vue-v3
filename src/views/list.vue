<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo,index) in todos" :key="index">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}
</script>
