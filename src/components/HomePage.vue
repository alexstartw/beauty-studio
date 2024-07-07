<template>
  <v-container fluid class="custom-cover align-center" style="min-height: 100vh;">

    <v-img
      src="https://zhonglibeautystudio.files.wordpress.com/2024/01/img_9375-1.jpg?w=632"
      aspect-ratio="16/9"
      class="cover-image"
      background-size="100%"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" offset="2">
          <h2 class="margin-bottom-half animated-text">Better Together</h2>
          <h6 class="margin-bottom-half animated-text">舒適完美，</h6>
          <h6 class="margin-bottom-half animated-text">一站美完</h6>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">

          <v-btn class="button-link" to="/zhongli">
            ⊹ 桃園市 中壢區 ⊹
          </v-btn>

          <v-btn class="button-link" to="/yangmei">
            ⊹桃園市 楊梅區⊹
          </v-btn>

          <v-btn class="button-link" to="/hsinchu">
            ⊹ 新竹市 東區 ⊹
          </v-btn>

          <v-btn
            href="https://zhonglibeautystudio.wordpress.com/%e6%9c%8d%e5%8b%99%e6%93%9a%e9%bb%9e/"
            class="button-link"
          >
            ⊹創業專區⊹室內裝潢、視覺設計
          </v-btn>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="d-flex justify-center align-end" cols="12">
          <img src="@/assets/GoogleMaps.png" @click="openGoogleMaps" alt="google map" style="width: 10%; height: auto;">
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
.custom-cover {
  min-height: 100vh;
}

.cover-image {
  object-fit: cover;
}

.margin-bottom-half {
  margin-bottom: 0.5em;
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

