<template>
  <el-container>
    <el-header class='header'>
      <div>NAMER</div>
      <img alt='github' src='@/assets/icon/github.svg' width='32'>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  background-color: black;
  color: white;

  font-family: D2Coding, monospace;
  font-weight: bold;
  font-size: 32px;
}
</style>
