<template>
  <section id="index">
    <article>
      <div class="intro-wrapper">
        <canvas
          id="canvas"
          ref="intro"
          :class="
            scrollY < introHeight ? 'position-fixed' : 'position-absolute'
          "
          class="d-none d-md-block"
          :style="scrollY < introHeight ? {} : { top: `${introHeight}px` }"
        />
        <h2
          class="d-block d-md-none text-14 w-100 text-center position-absolute text-uppercase"
          :style="{ bottom: '10vh' }"
        >
          Scroll Down
        </h2>
      </div>
    </article>

    <article class="mt-100vh about-wrapper">
      <b-container fluid>
        <b-row tag="header" class="about-header mx-0" align-h="center">
          <b-col
            cols="6"
            md="3"
            v-for="(item, i) in aboutItems"
            class="p-0"
            :key="i"
          >
            <logo-letter
              :item="item"
              :value="aboutKey"
              :mousePosition="mousePosition"
              :index="i"
            />
          </b-col>
        </b-row>
      </b-container>

      <b-row align-h="end">
        <b-col cols="11" md="5">
          <p class="about-desc mt-md-3 pt-5 lh-200 text-18 text-md-40">
            <strong>서로맑음</strong>
            <span class=" mx-n1 text-12 text-md-18">(Seoro-malgm)</span>
            은 <br />
            클라이언트, 유저, 협력자와 <br />
            <strong class="strong">교차</strong>하는
            <strong class="strong">과정</strong>을 통해 <br />
            <strong class="strong">강점</strong>을 부각한
            <strong class="strong">결과</strong>를 만듭니다.
          </p>
        </b-col>
      </b-row>
    </article>

    <article class="min-vh-100">
      <b-container fluid>
        <heading-section title="Current Works" />
        <template v-if="works && works.length">
          <b-row align-h="center">
            <b-col
              cols="12"
              md="6"
              class="mb-4"
              v-for="(item, i) in works"
              :key="i"
            >
              <b-btn
                variant="link reset w-100 p-0 border-0"
                role="link"
                @click="$router.push(`/work/${item.no}`)"
              >
                <media-large :item="item" />
              </b-btn>
            </b-col>
          </b-row>
          <div class="text-center mt-5">
            <b-btn variant="primary text-24 text-md-32" to="/work"
              >MORE WORKS &gt;</b-btn
            >
          </div>
        </template>
        <template v-else>
          <loading />
        </template>
      </b-container>
    </article>
    <article>
      <client-only>
        <section-marquee :scrollY="scrollY" :items="categories" />
        <section-marquee
          :scrollY="scrollY"
          :items="categories"
          :reverse="true"
        />
        <section-marquee :scrollY="scrollY" :items="categories" />
      </client-only>
    </article>
    <article>
      <heading-section title="product" align="center" />
      <b-container tag="section">
        <b-row>
          <b-col
            cols="12"
            md="4"
            class="mb-3 mb-md-0"
            v-for="(item, i) in products"
            :key="i"
          >
            <a :href="item.url" class="reset" role="link" target="_blank">
              <media-image :item="item" />
            </a>
          </b-col>
        </b-row>
      </b-container>
    </article>
  </section>
</template>

<script>
import * as THREE from "three";
import { db, allWorks } from "~/plugins/firebase.js";

export default {
  layout: "Default",
  // inject: ["scrollY", "scrollGap", "scrollHeight"],
  props: {
    scrollY: {
      type: Number
    },
    scrollGap: {
      type: Number
    },
    scrollHeight: {
      type: Number
    }
  },
  async asyncData() {
    const works = await allWorks();
    works.splice(4);
    return {
      works
    };
  },
  data() {
    return {
      // intro
      // three
      loaded: false,
      introHeight: null,

      // mouse X, Y
      mousePosition: {
        x: null,
        y: null
      },
      // about
      aboutKey: "en",
      aboutItems: [
        {
          ko: "서",
          en: "SEO",
          meanKo: "교차",
          meanEn: "Cross",
          image: require("@/assets/images/logo/seo.png")
        },
        {
          ko: "로",
          en: "RO",
          meanKo: "과정",
          meanEn: "Road",
          image: require("@/assets/images/logo/ro.png")
        },
        {
          ko: "맑",
          en: "MAL",
          meanKo: "결과",
          meanEn: "Result",
          image: require("@/assets/images/logo/mal.png")
        },
        {
          ko: "음",
          en: "GM",
          meanKo: "강점",
          meanEn: "Point",
          image: require("@/assets/images/logo/gm.png")
        }
      ],

      // work
      categories: [
        "Design",
        "Poster",
        "Branding",
        "Interactions",
        "Branding",
        "Website",
        "Develop",
        "Calligraphy",
        "Design",
        "Poster",
        "Branding",
        "Interactions",
        "Branding",
        "Website",
        "Develop",
        "Calligraphy"
      ],

      // product
      products: [
        {
          src: require("@/assets/images/products/poster.jpeg"),
          url: "https://marpple.shop/kr/seoro_malgm/products/8172115",
          title: "빤쓰런 일러스트 버전 포스터"
        },
        {
          src: require("@/assets/images/products/shirt.jpeg"),
          url: "https://marpple.shop/kr/seoro_malgm/products/8173652",
          title: "빤쓰런 티셔츠"
        },
        {
          src: require("@/assets/images/products/card.jpeg"),
          url: "https://marpple.shop/kr/seoro_malgm/products/8172217",
          title: "빤쓰런 엽서카드"
        }
      ]
    };
  },
  async mounted() {
    // intro
    const loaded = await THREE;
    if (loaded) {
      this.init();
    }

    // about
    this.aboutKeyToggler();
  },
  beforeMount() {
    // onmousemove
    window.addEventListener("mousemove", this.handlemMousemove);
  },
  beforeDestroy() {
    // onmousemove
    window.removeEventListener("mousemove", this.handlemMousemove);
  },
  methods: {
    init() {
      this.introHeight = Math.round(window.innerHeight);
      this.loaded = true;
      const scene = new THREE.Scene();

      const w = window.innerWidth;
      const h = this.introHeight;
      const camera = new THREE.PerspectiveCamera(
        // 거리, 크기,
        100,
        w / h,
        0.1,
        1000
      );
      camera.position.set(0, 0, 20);

      // canvas setting
      const canvas = this.$refs.intro;

      // THREE renderer
      const renderer = new THREE.WebGLRenderer({
        canvas
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);

      // draw
      const draw = () => {
        renderer.setClearColor(0x333399, 1);
        renderer.render(scene, camera);
      };

      // colorOption
      const color = { color: 0xededed };

      // Meshes
      const x_material = new THREE.MeshStandardMaterial(color);
      const x_geometry = new THREE.BoxGeometry(1.5, 12, 1);
      const x1 = new THREE.Mesh(x_geometry, x_material);
      const x2 = new THREE.Mesh(x_geometry, x_material);
      x1.rotation.z = -15;
      x2.rotation.z = 15;

      x1.position.set(-14, 0, 35);
      x2.position.set(-14, 0, 35);
      scene.add(x1, x2);

      const r_material = new THREE.MeshStandardMaterial(color);
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(8, 1.5, 1), r_material);
      const r3 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      r1.position.set(-3.5, 4, 35);
      r2.position.set(-5.6, 0, 35);
      r3.position.set(-7.5, -4, 35);
      scene.add(r1, r2, r3);

      const m_geometry = new THREE.TorusGeometry(11.8, 3, 10, 4);
      const m_material = new THREE.MeshStandardMaterial(color);
      const cube = new THREE.Mesh(m_geometry, m_material);
      cube.position.set(7.9, -0.5, 5);
      scene.add(cube);

      const o_geometry = new THREE.TorusGeometry(4.5, 1, 10, 50);
      const o_material = new THREE.MeshStandardMaterial(color);
      // mesh = geometry + material
      const tourus = new THREE.Mesh(o_geometry, o_material);
      tourus.position.set(14.6, 0, 35);
      scene.add(tourus);

      // 빛
      const light = new THREE.DirectionalLight(0xdfebff, 1);
      light.position.set(10, 300, 10);
      light.position.multiplyScalar(4);

      light.castShadow = true;

      light.shadow.mapSize.width = 180;
      light.shadow.mapSize.height = 48;
      const d = 300;

      light.shadow.camera.left = -d;
      light.shadow.camera.right = d;
      light.shadow.camera.top = d;
      light.shadow.camera.bottom = -d;

      light.shadow.camera.far = 1000;

      const pointLight = new THREE.PointLight(0xdfebff, 1, 100);
      pointLight.position.set(3, 5, -5);

      scene.add(new THREE.AmbientLight(0xededed), light, pointLight);

      // const gridHelper = new THREE.GridHelper(200, 60);
      // scene.add(gridHelper);

      // 애니메이션 루프를 활용하여, 애니메이션 프레임대로 animate가 그려짐
      const animate = () => {
        requestAnimationFrame(animate);
        x1.rotation.y += 0.03;
        x1.rotation.z += 0.03;
        x2.rotation.y += 0.03;
        x2.rotation.z += 0.03;

        if (this.scrollY === 0) {
          cube.rotation.y += 0.03;
          cube.rotation.z += 0.03;
        }
        draw();
      };
      animate();

      // 리사이즈 감지
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // 스크롤 감지
      window.addEventListener("scroll", () => {
        if (this.scrollY <= this.introHeight) {
          camera.position.set(0, 0, this.scrollY * 0.05 + 10);
          cube.rotation.set(0, 0, this.scrollY * 0.0048);
        }
        if (this.scrollY >= this.introHeight) {
          camera.position.set(0, 0, this.introHeight * 0.05 + 10);
          cube.rotation.set(0, 0, 0.79);
        }
      });
    },
    aboutKeyToggler() {
      const keys = ["ko", "en", "meanKo", "meanEn"];

      setInterval(() => {
        const num = Math.round(Math.random() * (keys.length - 1));
        this.aboutKey = keys[num];
      }, 1800);
    },
    handlemMousemove(e) {
      this.mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  &:not(:first-child) {
    margin: 72px 0 120px;
    padding: 48px 0;
    @media all and (max-width: 768px) {
      margin-bottom: 56px;
    }
  }
}

// intro
.intro-wrapper {
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: transparent;
  margin: 0 -2rem;
  position: relative;

  #canvas {
    top: 0;
    left: 0;
    z-index: 2000;
  }
}

// about
.about-wrapper {
  p.about-desc {
    .strong {
      display: inline-block;
      position: relative;
      &::after {
        display: block;
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $secondary;
      }
    }
  }
}

// custom margin
.mt-100vh {
  @media all and (min-width: 768px) {
    margin-top: 100vh !important;
  }
}
</style>
