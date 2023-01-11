<template>
  <el-input
    v-model='input'
    placeholder='변환할 단어 입력'
    size='large'
    class='input-box'
  >
    <template #prepend>
      <el-select
        v-model='selectCase'
        placeholder='전체'
        style='width: 150px'
        size='large'
      >
        <el-option label='전체' value='ALL' />
        <el-option label='camelCase' value='CALMEL_CASE' />
        <el-option label='PascalCase' value='PASCAL_CASE' />
        <el-option label='snake_case' value='SNAKE_CASE' />
        <el-option label='CONSTANT_CASE' value='CONSTANT_CASE' />
      </el-select>
    </template>
    <template #append>
      <el-button>
        <el-icon :size='16'>
          <MagicStick />
        </el-icon>
      </el-button>
    </template>
  </el-input>
</template>

<script lang='ts' setup>
import { MagicStick } from '@element-plus/icons-vue'

const input = ref('')
const selectCase = ref('ALL')
</script>

<style scoped>
.input-box {
  margin-top: 40px;
}
</style>
