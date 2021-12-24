<template>
  <div role="navigation">
    <div v-show="isLoaded">
      <canvas ref="logo" height="48" />
    </div>
    <div
      class="text-primary h-100 d-flex flex-column justify-content-center align-items-center"
      v-if="!isLoaded"
      :style="{ minHeight: '56px' }"
    >
      <h1 class="text-20 text-md-24">서로맑음</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  layout: "Default",
  data() {
    return {
      isLoaded: false,
      scrollY: 0,
      active: false
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    if (THREE) {
      this.init();
      this.isLoaded = true;
    }
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      this.scrollY > 100 ? (this.active = true) : (this.active = false);
    },
    init() {
      const scene = new THREE.Scene();

      // scene
      const w = 188;
      const h = 48;
      const camera = new THREE.PerspectiveCamera(
        // 거리, 크기,
        75,
        w / h,
        1,
        1000
      );
      camera.position.set(0, 0, 8);

      // canvas
      const canvas = this.$refs.logo;

      // THREE renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true
      });

      // options
      const option = {
        color: 0x333399
      };

      // renderer
      renderer.setPixelRatio(window.devicePixelRatio * 3);
      renderer.setSize(w, h);

      // meshes
      // X
      const x_material = new THREE.MeshStandardMaterial(option);
      const x_geometry = new THREE.BoxGeometry(1.5, 12, 1);
      const x1 = new THREE.Mesh(x_geometry, x_material);
      const x2 = new THREE.Mesh(x_geometry, x_material);
      x1.rotation.z = -15;
      x2.rotation.z = 15;
      x1.position.set(-14, 0, 0);
      x2.position.set(-14, 0, 0);
      scene.add(x1, x2);
      // R
      const r_material = new THREE.MeshStandardMaterial(option);
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(8, 1.5, 1), r_material);
      const r3 = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1), r_material);
      r1.position.set(-3.5, 4, 0);
      r2.position.set(-5.6, 0, 0);
      r3.position.set(-7.5, -4, 0);
      scene.add(r1, r2, r3);
      // M
      const m_geometry = new THREE.TorusGeometry(5.5, 1.7, 5, 4);
      const m_material = new THREE.MeshStandardMaterial(option);
      const cube = new THREE.Mesh(m_geometry, m_material);
      scene.add(cube);
      cube.position.set(3.7, 0, 0);
      cube.rotation.set(0, 0, -0.775);
      // O
      const o_geometry = new THREE.TorusGeometry(4.5, 1, 10, 50);
      const o_material = new THREE.MeshStandardMaterial(option);
      const tourus = new THREE.Mesh(o_geometry, o_material);
      tourus.position.set(16, 0, 0);
      scene.add(tourus);

      // light
      const light = new THREE.DirectionalLight(0xffffff, 0.45);
      light.position.set(10, 15, 40);
      light.castShadow = true;
      scene.add(new THREE.AmbientLight(0xffffff), light);

      // fog
      scene.fog = new THREE.Fog(0x222222, 0.025, 30);

      // draw
      const draw = () => {
        renderer.setClearColor(0xffffff, 0);
        renderer.render(scene, camera);
      };

      // animate
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        x1.rotation.y += 0.02;
        x1.rotation.z += 0.02;
        x2.rotation.y += 0.02;
        x2.rotation.z += 0.02;
        draw();
      };
      animate();
    }
  }
};
</script>
