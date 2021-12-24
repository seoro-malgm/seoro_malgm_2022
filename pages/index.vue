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
        />
      </div>
    </article>
    <article class="mt-75vh">
      <client-only>
        <section-marquee :items="categories" />
        <section-marquee :items="categories" :reverse="true" />
      </client-only>
    </article>
    <article class="min-vh-100">
      <h1>
        Works
      </h1>
    </article>
    <article class="pb-5">
      <heading-section title="product" />
      <b-container tag="section">
        <b-row>
          <b-col cols="12" md="4" v-for="(item, i) in products" :key="i">
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
  data() {
    return {
      // three
      loaded: false,
      scrollY: null,
      scrollHeight: null,
      gap: null,
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
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      this.scrollHeight = scrollHeight;
      this.scrollY = window.scrollY;
      this.aboutHeight = Math.round(window.innerHeight);
      this.gap = this.scrollY - this.scrollHeight;
    },
    init() {
      this.loaded = true;
      const scene = new THREE.Scene();

      const w = window.innerWidth;
      const h = window.innerHeight;
      const camera = new THREE.PerspectiveCamera(
        // 거리, 크기,
        100,
        w / h,
        0.1,
        1000
      );
      camera.position.set(0, 0, 10);

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

      // Meshes
      const x_material = new THREE.MeshStandardMaterial({ color: 0xededed });
      const x_geometry = new THREE.BoxGeometry(1.5, 12, 1);
      const x1 = new THREE.Mesh(x_geometry, x_material);
      const x2 = new THREE.Mesh(x_geometry, x_material);
      x1.rotation.z = -15;
      x2.rotation.z = 15;

      x1.position.set(-14, 0, 20);
      x2.position.set(-14, 0, 20);
      scene.add(x1, x2);

      const r_material = new THREE.MeshStandardMaterial({ color: 0xededed });
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(8, 1.5, 1), r_material);
      const r3 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      r1.position.set(-3.5, 4, 20);
      r2.position.set(-5.6, 0, 20);
      r3.position.set(-7.5, -4, 20);
      scene.add(r1, r2, r3);

      const m_geometry = new THREE.TorusGeometry(w < 768 ? 9 : 16, 3, 10, 4);
      const m_material = new THREE.MeshStandardMaterial({
        color: 0xededed
        // side: THREE.DoubleSide,
      });
      const cube = new THREE.Mesh(m_geometry, m_material);
      cube.position.set(w < 768 ? 6.3 : 10, 0.2, -5);
      scene.add(cube);

      const o_geometry = new THREE.TorusGeometry(4.5, 1, 10, 50);
      const o_material = new THREE.MeshStandardMaterial({
        color: 0xededed
      });
      // mesh = geometry + material
      const tourus = new THREE.Mesh(o_geometry, o_material);
      tourus.position.set(14.6, 0, 20);
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
        // 렌더를 계속 해야함.

        x1.rotation.y += 0.03;
        x1.rotation.z += 0.03;
        x2.rotation.y += 0.03;
        x2.rotation.z += 0.03;

        const y = window.scrollY;

        if (y === 0) {
          cube.rotation.y += 0.03;
          cube.rotation.x += 0.03;
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
        const w = window.screen.availWidth;
        const y = window.scrollY;
        camera.position.set(0, 0, w < 768 ? y * 0.048 + 11 : y * 0.065 + 4);
        // console.log(cube.rotation.z);
        // if (cube.rotation.z >= 0.78) {
        //   cube.rotation.set(0, 0, 0.78);
        //   return;
        // } else {
        cube.rotation.set(0, 0, w < 768 ? y * 0.00404 : y * 0.0017);
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  margin: 0 0 24px;
  padding: 0 0 24px;
}

.about-wrapper {
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 85vh;
  background-color: transparent;
  margin: 0 -2rem;

  #canvas {
    top: 0;
    left: 0;
  }
}

.mt-75vh {
  margin-top: 75vh;
}
</style>
