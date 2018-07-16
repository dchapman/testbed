import objectFitImages from 'object-fit-images';
import Resize from 'vue-resize-directive';

import Vue from 'vue';

import Glitch from './components/glitch/container';
import Proximity from './components/proximity';

import Imageloaded from './directives/imageloaded';

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  mounted() {
    objectFitImages();
  },
  components: {
    Glitch,
    Proximity
  },
  directives: {
    Imageloaded,
    Resize
  }
});
