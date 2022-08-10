<script>
import Sidebar from "./components/Sidebar.vue";
export default { components: { Sidebar } };
</script>

<template>
  <div class="main">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #121128;
  z-index: -1;
  display: flex;
  

}
.home{
position: absolute;
  left: 100px;
}
.sidebar {
  background: #1a162c;
  position: absolute;
  width: 100px;
  height: 100vh;
  text-align: center;
}
</style>
