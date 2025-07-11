<template>
  <div class="logout-wrapper">
    <el-card class="logout-card">
      <template #header>
        <span>Logout processing in progress</span>
      </template>

      <el-result
        icon="success"
        title="You have safely logged out"
        :sub-title="
          logoutUrl
            ? `Redirecting to sign-out page in ${countdown} seconds…`
            : `Returning to home page in ${countdown} seconds…`
        "
      />

      <div v-if="logoutRes" class="logout-result">
        <span style="color: #888; font-size: 0.96em">Logout Result:</span>
        <pre style="font-size: 0.97em; text-align: left">{{ logoutRes }}</pre>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const logoutRes = ref( '' )
const logoutUrl = ref( '' )
const countdown = ref( 3 )

onMounted( () => {
  logoutUrl.value = route.query.logoutUrl
  if ( route.query.result ) {
    logoutRes.value = route.query.result
  }
  const interval = setInterval( () => {
    countdown.value--
    if ( countdown.value <= 0 ) {
      clearInterval( interval )
      if ( logoutUrl.value ) {
        window.location.href = logoutUrl.value
      } else {
        window.location.href = '/'
      }
    }
  }, 1000 )
} )
</script>

<style scoped>
.logout-wrapper {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}
.logout-card {
  width: 100%;
  max-width: 400px;
  border-radius: 14px;
  box-shadow: 0 2px 12px #eee;
  padding: 1.5rem 2rem 2rem 2rem;
}
.logout-result {
  margin-top: 1rem;
  text-align: left;
  background: #fafafa;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.92rem;
  color: #333;
}
</style>
