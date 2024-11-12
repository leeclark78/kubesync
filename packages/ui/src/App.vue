<template>
  <div class="kubesync-app">
    <nav class="navbar">
      <div class="logo">KubeSync</div>
      <div class="nav-items">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/configurations">Configurations</router-link>
        <router-link to="/providers">Providers</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.kubesync-app {
  --ks-primary: #2B6CB0;
  --ks-secondary: #48BB78;
  
  .navbar {
    background: var(--ks-primary);
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>