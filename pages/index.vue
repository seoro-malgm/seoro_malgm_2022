<template>
  <section id="index">
    <article>
      <div class="about-wrapper">
        <canvas
          id="canvas"
          ref="about"
          :class="
            scrollY < aboutHeight ? 'position-fixed' : 'position-absolute'
          "
          class="d-none d-md-block"
          :style="scrollY < aboutHeight ? {} : { top: `${aboutHeight}px` }"
        />
        <h2
          class="d-block d-md-none text-14 w-100 text-center position-absolute text-uppercase"
          :style="{ bottom: '10vh' }"
        >
          Scroll Down
        </h2>
      </div>
    </article>

    <article class="mt-100vh">
      <div class="text-center text-vollkorn text-80">
        CROSS, ROAD, RESULT, POINT
      </div>
      <b-row align-h="center">
        <b-col cols="12" md="7">
          <p class="mt-3 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            reprehenderit aut, alias delectus esse enim et iusto magnam, earum
            similique eligendi reiciendis aperiam praesentium cupiditate quam
            voluptate facere maxime recusandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolorum reprehenderit aut, alias
            delectus esse enim et iusto magnam, earum similique eligendi
            reiciendis aperiam praesentium cupiditate quam voluptate facere
            maxime recusandae.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolorum reprehenderit aut, alias delectus esse
            enim et iusto magnam, earum similique eligendi reiciendis aperiam
            praesentium cupiditate quam voluptate facere maxime recusandae.
          </p>
        </b-col>
      </b-row>
    </article>
    <article class="min-vh-100 p-5 bg-secondary text-primary">
      <heading-section title="Current Works" />
      <b-row v-for="(item, i) in 3" :key="i" class="mb-4">
        <b-col>
          <div class="bg-img ratio-67 bg-darkest"></div>
        </b-col>
        <b-col>
          <div class="bg-img ratio-67 bg-darkest"></div>
        </b-col>
        <b-col>
          <div class="bg-img ratio-67 bg-darkest"></div>
        </b-col>
      </b-row>
      <div class="text-center">
        <b-btn variant="primary">more works</b-btn>
      </div>
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
  data() {
    return {
      // three
      loaded: false,
      aboutHeight: null,

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
    const loaded = await THREE;
    if (loaded) {
      this.init();
    }
  },
  methods: {
    init() {
      this.aboutHeight = Math.round(window.innerHeight);
      this.loaded = true;
      const scene = new THREE.Scene();

      const w = window.innerWidth;
      const h = this.aboutHeight;
      const camera = new THREE.PerspectiveCamera(
        // 거리, 크기,
        100,
        w / h,
        0.1,
        1000
      );
      camera.position.set(0, 0, 20);

      // canvas setting
      const canvas = this.$refs.about;

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
        if (this.scrollY < this.aboutHeight) {
          camera.position.set(0, 0, this.scrollY * 0.05 + 10);
          cube.rotation.set(0, 0, this.scrollY * 0.0048);
        }
        if (this.scrollY >= this.aboutHeight) {
          cube.rotation.set(0, 0, 0.79);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  &:not(:first-child) {
    margin: 56px 0 120px;
    padding: 48px 0;
    @media all and (max-width: 768px) {
      margin-bottom: 56px;
    }
  }
}

.about-wrapper {
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

.mt-100vh {
  @media all and (min-width: 768px) {
    margin-top: 100vh !important;
  }
}
</style>
