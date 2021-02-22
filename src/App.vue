
<template>
 <el-container class="billy">
    <el-header>Header</el-header>
    <el-container class="billy-main-page" :style="{height: `${screenHeight - 75}px`}"> 
      <el-aside width="200px">
        <by-menu />

      </el-aside>
      <el-main class="billy-main-page__main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ElContainer from 'element-plus/lib/el-container'
import ElAside from 'element-plus/lib/el-aside'
import ElMain from 'element-plus/lib/el-main'
import ElHeader from 'element-plus/lib/el-header'
import ByMenu from '@components/menu'
import {testPut} from '@services/test'
export default {
  components :{
    ElContainer,
    ElAside,
    ElMain,
    ElHeader,
    'by-menu':ByMenu
  },
  data: () => ({
    screenHeight: 0
  }),
  mounted() {
    testPut()
    this.screenHeight = document.documentElement.clientHeight 
    const _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
  }
}
</script>
<style lang="scss">
.common-layout {
  display: block;
}

.billy {

  .billy-main-page {
    // display: flex;
    height: 100%;
  }
  .billy-main-page__main {
    // flex: 1;
  }
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>