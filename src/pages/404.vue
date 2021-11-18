<template>
  <div class="main">
    <div class="bgimg">
      <img src="../../static/img/111.jpeg" alt="" />
      <div class="font">
        <div class="fore">404</div>
        <div class="text">
          <p>sorry,The page was not found,Please click back to the home page</p>
          <a-button style="margin-left: 20px" @click="goHome">home</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: '404',
  setup () {
    const goHome = () => {
      router.push({ name: 'Home' })
    }
    return {
      goHome
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 100%;
$height: 100%;
.main {
  width: $width;
  height: $height;
  position: relative;
  .bgimg {
    width: $width;
    height: $height;
    img {
      width: $width;
      height: $height;
    }
  }
  .font {
    position: absolute;
    top: 180px;
    right: 60px;
    .fore {
      font-size: 130px;
      font-weight: bold;
    }
    .text {
      font-size: 22px;
      width: 500px;
    }
  }
}
</style>>
