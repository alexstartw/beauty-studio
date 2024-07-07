<template>
  <div class="cover alignfull has-custom-content-position is-position-top-center" style="min-height: 100vh;">
    <div class="cover-background">
      <img class="cover-image" alt="" src="https://zhonglibeautystudio.files.wordpress.com/2024/01/img_9375-1.jpg?w=632" />
    </div>
    <div class="cover-inner-container">
      <h2 class="heading">Better Together</h2>
      <h6 class="heading">舒適完美，</h6>
      <h6 class="heading">一站美完</h6>

      <div class="spacer" style="height: 20px;"></div>

      <div class="buttons">
        <a href="https://maps.app.goo.gl/QoAMkcvzTB1q6i9UA" class="button" style="background-color: #baaf87;">中央西路一段90號2樓 ⊹ 點我導航</a>
        <a href="https://www.instagram.com/beige.lash?igsh=YTRodjU5MXR0cHR4" class="button">⊹美睫⊹ Beige Lash 日式美睫</a>
        <a href="https://www.instagram.com/rayna.nails_?igsh=MXd1NXViemhvM2c0dA==" class="button">⊹美甲⊹ Rayna Nails 精緻美甲</a>
        <a href="https://www.instagram.com/ms.clouds_2023?igsh=MWJjdXFzYmV1NXNvNg==" class="button">⊹美容⊹ Ms.Clouds 皮膚護理</a>
        <a href="https://www.instagram.com/kumo.relax?igsh=MTk4dXAybG1ucW8zNw==" class="button">⊹撥筋⊹ Kumo Relax 療癒放鬆</a>
        <a href="https://www.instagram.com/mmmm.beauty_studio?igsh=NXN0aDFsOWZkd21m" class="button">⊹紋繡⊹ Mmmm Studio 霧眉霧唇</a>
        <a href="https://www.instagram.com/jovia.aesthetic.studio?igsh=MTVubzNsbnRxYWxuMw%3D%3D&amp;utm_source=qr" class="button">⊹艾草溫罐⊹ Jovia Studio 經絡放鬆</a>
        <a href="https://www.instagram.com/dabe.studio?igsh=cHFzZHBjemhsZmk5" class="button">⊹牙鑽⊹ Dabe Studio 牙鑽牙飾</a>
        <a href="https://www.instagram.com/shan3.studio?igsh=MXh3ZHNvMWVyMTBzOA==" class="button">⊹除毛⊹ Shan. 熱蠟/好孕除毛</a>
        <a href="https://www.instagram.com/jstudio1314?igsh=MTR0OGt3ZTdmMzV3dA==" class="button">⊹採耳⊹ J Studio 採耳耳燭</a>
        <a href="https://www.instagram.com/yon_beautyskin?igsh=eWtiYzE5NHNtbDhz" class="button">⊹永膚術⊹ Yon Beauty Skin 紋路修復</a>
        <a href="https://www.instagram.com/design_maggietsao?igsh=MXBqOHZ2eGZnY21yZw==" class="button">⊹設計⊹ Maggie T. 產品視覺設計</a>
      </div>

      <div class="spacer" style="height: 20px;"></div>

      <div class="social-links">
        <!-- Social links go here -->
      </div>

      <div class="spacer" style="height: 100px;"></div>

      <!-- Heading goes here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverComponent'
};
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
}

.cover-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.cover-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-inner-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.heading {
  font-size: 41px;
  line-height: 1.25;
  margin-bottom: 0.5em;
}

.spacer {
  height: 20px;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: block;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #baaf87;
  border-radius: 3px;
}

.button:hover {
  background-color: #000;
}

.social-links {
  /* Styles for social links go here */
}
</style>
