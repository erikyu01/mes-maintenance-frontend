<template>
  <div class="callback-wrapper">
    <el-card class="callback-card">
      <template #header>
        <span>登录回调处理中</span>
      </template>

      <!-- Loading 状态 -->
      <el-result
        v-if="loading"
        icon="info"
        title="正在校验Cognito登录"
        sub-title="请稍候……"
      />

      <!-- 错误状态 -->
      <el-result
        v-else-if="error"
        icon="error"
        title="回调失败"
        :sub-title="errorMsg"
      >
        <template #extra>
          <el-button type="primary" @click="retry" :loading="loading">重试</el-button>
          <el-button @click="goHome" style="margin-left: 1rem;">返回首页</el-button>
        </template>
      </el-result>

      <!-- 成功状态 -->
      <el-result
        v-else
        icon="success"
        title="登录成功"
        sub-title="正在跳转主页面……"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { callback } from '@/api/auth'
import { gotoCognitoLogin } from '@/utils/cognito'
import { useUserStore } from '../../store'

const loading = ref( true )
const error = ref( false )
const errorMsg = ref( '' )

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const gotoCognito = () => {
  gotoCognitoLogin()
}

const goHome = () => {
  router.replace( '/' )
}

const retry = () => {
  loading.value = true
  error.value = false
  errorMsg.value = ''
  doCallback()
}

const doCallback = async() => {
  const code = route.query.code
  console.log( 'doCallback running', code )

  if ( !code ) {
    error.value = true
    loading.value = false
    errorMsg.value = '未检测到Cognito登录code，已自动跳转首页。'
    setTimeout( gotoCognito, 1800 )
    return
  }
  try {
    await callback( code )
    await userStore.GET_USER_INFO()
    console.log( 'User username: ', userStore )
    loading.value = false
    error.value = false
    await nextTick()
    setTimeout( () => {
      router.replace( '/' )
    }, 1000 )
  } catch ( err ) {
    loading.value = false
    error.value = true
    errorMsg.value =
      err?.response?.data?.message ||
      '登录回调失败，请重试或联系管理员。'
    console.error( 'Callback error detail:', err )
  }
}

onMounted( () => {
  console.log( 'Callback page mounted!', route.query.code )
  doCallback()
} )
</script>

<style scoped>
.callback-wrapper {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}
.callback-card {
  width: 100%;
  max-width: 400px;
  border-radius: 14px;
  box-shadow: 0 2px 12px #eee;
  padding: 1.5rem 2rem 2rem 2rem;
}
</style>
