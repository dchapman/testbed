import {TweenLite, CSSPlugin, EasePack} from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

export default {
  name: 'tout',

  data() {
    return {

    }
  },

  mounted() {
    let circle = document.querySelector('.circle');
    let circleSmall = document.querySelector('.circle--small');

    this.$el.addEventListener('pointerenter', (e) => {
      TweenMax.to(circle, 0.2, { scale: 4 });
    });

    this.$el.addEventListener('pointerleave', (e) => {
      TweenMax.to(circle, 0.2, { scale: 1 });
    });
  },

  methods: {

  }
};
