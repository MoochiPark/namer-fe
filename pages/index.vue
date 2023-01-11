<template>
  <el-row class='main-row' gutter='20'>
    <el-col :span='4' class='side-banner'>
      banner
    </el-col>
    <el-col :span='16' class='main-col'>
      <p class='title'>NAMER</p>
      <p class='description'>변수 이름, 함수 이름, 클래스 이름 등 자신이 필요한 단어를 변환하세요</p>
      <InputBox />
    </el-col>
    <el-col :span='4' class='side-banner'>
      banner
    </el-col>
  </el-row>
</template>

<script lang='ts' setup>
const activeIndex = ref('1')
console.log(activeIndex.value)
</script>

<style scoped>
.main-row {
  justify-content: space-between;
  height: 1000px;
}

.main-col {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side-banner {
  background-color: lightgray;
}

.title {
  font-family: D2Coding, monospace;
  font-weight: bold;
  font-size: 82px;
}

.description {
  font-size: 14px;
}
</style>
