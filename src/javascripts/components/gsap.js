import {TweenLite, CSSPlugin, EasePack} from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

export default {
  name: 'gsap',

  data() {
    return {
      master: new TimelineMax()
    }
  },

  mounted() {
    this.master
      .add(this.createPanel('1', 50))
      .add(this.createPanel('2', -50))
      .add(this.createPanel('3', 50));
  },

  methods: {
    createPanel(id, startY = 50) {
      var timeline = new TimelineMax();

      timeline
        .from(`.panel${id} .bg`, 0.4, {scale:0, ease:Power1.easeInOut}, "in1")
        .from(`.panel${id} .bg`, 0.3, {rotation:90, ease:Power1.easeInOut}, "in1")
        .staggerFrom(`.panel${id} .text span`, 1.1, {y: startY, opacity:0, ease:Elastic.easeOut}, 0.06)
        .addLabel(`out${id}`, "+=1")
        .staggerTo(`.panel${id} .text span`, 0.3, {opacity:0, y:50, ease:Power1.easeIn}, -0.06, "out1")
        .to(`.panel${id} .bg`, 0.4, {scale:0, rotation:-90, ease:Power1.easeInOut});

      return timeline;
    }
  }
};
