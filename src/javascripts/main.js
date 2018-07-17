import objectFitImages from 'object-fit-images';
import Resize from 'vue-resize-directive';

import Vue from 'vue';

import Glitch from './components/glitch/container';
import Proximity from './components/proximity';
import Gsap from './components/gsap';
import Osmosis from './components/osmosis';

import Imageloaded from './directives/imageloaded';

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  mounted() {
    objectFitImages();
  },
  components: {
    Glitch,
    Proximity,
    Gsap,
    Osmosis
  },
  directives: {
    Imageloaded,
    Resize
  }
});
