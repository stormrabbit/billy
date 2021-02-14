<template>
  <el-menu
    active-text-color="#545c64"
    background-color="#D3DCE6"
    :router="true"
    @select="handleSelect"
  >
    <el-menu-item v-for="(menu , index) in menus" :index="`${menu.router}`" :key="index">
         <template #title>{{menu.title}}</template>
    </el-menu-item>
  </el-menu>
</template>



<script>
import ElMenu from "element-plus/lib/el-menu";
import ElMenuItem from "element-plus/lib/el-menu-item";
export default {
  components: {
    ElMenu,
    ElMenuItem,
  },
  data: () => ({
    menus: [
      {
        title: "Dashboard",
        router: '/'
      },
      {
        title: "用户管理",
        router: '/users'
      },
      {
        title: "角色管理",
        router: '/roles'
      },
      {
        title: "权限管理",
        router: '/athorities'
      },
      {
        title: "资源管理",
        router: '/endpoints'
      },
    ],
  }),
  methods: {
    handleSelect(key, keyPath) {
        console.log(this.$route);
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
    li {
        list-style-type:none;
        line-height: 34px;
        margin: 8px 0;
    }
</style>