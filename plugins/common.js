import Vue from "vue";

// import regex from "../lib/regex";
const common = {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {};
      },
      computed: {},
      methods: {
        copyText(text) {
          const board = navigator.clipboard;
          board
            .writeText(text)
            .then(() => {
              window.alert("클립보드에 복사되었습니다");
            })
            .catch(error => {
              window.alert(error);
            });
        }
      }
    });
  }
};

Vue.use(common);
