<!--
1)Use 'lang' as prefix to change the languages
eg:- lang.name  
2)Insert all the const string in the locales file
-->

<template>
  <div>
      
      <select v-model="currentlang" @click="$store.commit('changelang', currentlang)"> 
        <option value="en">English</option>
        <option value="as">Assamese</option>
        <option value="bn">Bengali</option>
        <option value="hn">Hindi</option>
      </select>
      
      <p>This is an example: {{ lang.name }}</p>
      
    <router-view/>
  </div
</template>

<script>

export default {
  data() {
    return {
      currentlang: 'en'
    }
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

body{
  background-color: rgba(245, 245, 245, 0.164);
  margin: 0;
  padding: 0;
  font-family: 'Hind Siliguri', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
