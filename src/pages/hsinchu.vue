<template>
  <v-container fluid class="pa-0">
    <v-row class="header" align="center" justify="center">
      <v-col cols="12" offset="2">
        <router-link to="/" style="text-decoration: none;">
          <h2 class="margin-bottom-half animated-text">Better Together </h2>
          <h6 class="margin-bottom-half animated-text">舒適完美，</h6>
          <h6 class="margin-bottom-half animated-text">一站美完</h6>
        </router-link>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="pa-0" style="overflow: hidden;">
    <v-img
      src="https://zhonglibeautystudio.files.wordpress.com/2024/01/img_9375-1.jpg?w=632"
      class="cover-image"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">

          <v-btn class="button-link" style="background-color:#90d7bd" href="https://maps.app.goo.gl/krNBjQEqcX11iFnj9?g_st=ic">
            新竹市東區西大路16號 ⊹ 點我導航
          </v-btn>

          <v-btn class="button-link"
                 href="https://lin.ee/MG4Oh4y">
            ⊹ 艾草溫罐⊹ Jw嘉薇美學
          </v-btn>

          <v-btn class="button-link"
                 href="https://www.instagram.com/jovia.aesthetic.studio?igsh=MTVubzNsbnRxYWxuMw%3D%3D&amp;utm_source=qr">
            ⊹ 飄霧眉 ⊹ Jovia妝語美學
          </v-btn>

          <v-btn class="button-link"
                 href="https://www.facebook.com/profile.php?id=100091250064615&amp;mibextid=hu50Ix">
            ⊹ 水晶療癒 ⊹ Lucy水晶學院
          </v-btn>

          <v-btn class="button-link"
                 href="https://zhonglibeautystudio.wordpress.com/%e6%9c%8d%e5%8b%99%e6%93%9a%e9%bb%9e/">
            ⊹創業專區⊹室內裝潢、視覺設計
          </v-btn>
        </v-col>
        <v-col cols="9" class="d-flex justify-start align-end">
          <img src="@/assets/GoogleMaps.png" @click="openGoogleMaps" alt="google map" style="width: 50px; height: auto; margin-top: 20px;">
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: 'CoverComponent',
  methods: {
    openGoogleMaps() {
      window.open('https://maps.app.goo.gl/wNGf8vctcnPUhWLy5?g_st=ic', '_blank');
    },
  },
};
</script>

<style scoped>
.header {
  background-color: white; /* 空白背景 */
  color: black; /* 黑色文字 */
}

.cover-image {
  object-fit: cover;
  max-width: 100%;
}

.button-link {
  margin-top: 20px;
  width: 70%;
  border: 1px #000; /* 黑色邊框 */
  color: #000; /* 黑色文字 */
  background-color: white;
  padding: 8px 16px; /* 按鈕內邊距 */
  font-size: 16px; /* 字體大小 */
  cursor: pointer; /* 鼠標指針樣式 */
  border-radius: 4px; /* 圓角 */
}

.button-link:hover {
  background-color: bisque; /* 滑鼠懸停時的背景顏色 */
  color: black; /* 滑鼠懸停時的文字顏色 */
}

.my-icon {
  margin-top: 100px;
}

.animated-text {
  color: black; /* 設置初始顏色 */
  animation: textAnimation 2s ease infinite; /* 應用動畫效果 */
}

@keyframes textAnimation {
  0% {
    color: black; /* 起始顏色 */
  }
  50% {
    color: #ff4081; /* 中間顏色 */
  }
  100% {
    color: black; /* 結束顏色 */
  }
}
</style>
