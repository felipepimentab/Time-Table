<template>
  <router-view/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/edit">Edit</router-link>
    <p>Designed by Felipe Pimenta &copy; in Vitória</p>
  </div>
  
</template>

<style lang="scss">
@font-face {
  font-family: 'San Francisco';
  src: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/SF-Pro-Rounded-Bold.ttf);
}

html {
  font-family: 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


  min-width: 100vw;
  min-height: 100vh;
  background-image: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/earth.jpg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
    p {
    font-weight: bolder;
    margin: 0 0 2rem 0;
    padding: 0;
  }
}

#nav {
  padding: 0.5rem;
  margin-top: 2rem;
  a {
    color: black;
    font-weight: bolder;
    &.router-link-exact-active {
      color: #404040;
    }
  }
}

p {
  font-weight: lighter;
  margin: 2rem 0 2rem 0;
  padding: 0;
}

@media screen and (max-width: 1000px) {
}
</style>
