<template>
  <div>
    <button @click="toggleSidebar" class="btn btn-primary">Toggle Sidebar</button>

    <div :class="['sidebar', { 'collapsed': isCollapsed }]">
      <p>Sidebar Content</p>
    </div>

    <div class="content">
      <p>Main Content</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
}

.collapsed {
  width: 0;
  overflow: hidden;
}

.content {
  margin-left: 200px;
  transition: margin-left 0.3s ease;
}
</style>
