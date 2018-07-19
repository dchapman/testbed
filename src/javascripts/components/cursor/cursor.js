import {TweenLite, CSSPlugin, EasePack} from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

export default {
  name: 'followcursor',

  data() {
    return {
      master: new TimelineMax()
    }
  },

  mounted() {
    let circle = document.querySelector('.circle');
    let circleSmall = document.querySelector('.circle--small');

    window.addEventListener('pointermove', (e) => {

      TweenMax.to(circle, 0.3, { x: e.pageX - 10, y: e.pageY - 10 });
      TweenMax.to(circleSmall, 0.5, { x: e.pageX - 2, y: e.pageY - 2 });
    });
  },

  methods: {

  }
};
