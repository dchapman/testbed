import {TweenLite, CSSPlugin, EasePack} from "gsap/TweenMax";

export default {
  name: 'gsap',

  data() {
    return {
      box: null
    }
  },

  mounted() {
    this.box = this.$el.querySelector('.gsap__box');

    this.iHateTomatoes();
  },

  methods: {
    iHateTomatoes() {
      /*TweenLite.to(this.box, 0.7, {left: 0, x: 0});*/
      /*TweenLite.from(this.box, 2, {x: '-=200px', autoAlpha: 0});*/

      /*TweenLite.set(this.box, {x: '-=200px', scale: 0.3});
      TweenLite.set(this.box, {x: '+=100px', scale: 0.6, delay: 1});
      TweenLite.set(this.box, {x: '-50%', scale: 1, delay: 2});*/

      /*TweenLite.fromTo(this.box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeInOut});*/

      /*TweenLite.to(this.box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
      TweenLite.to(this.box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
      TweenLite.to(this.box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
      TweenLite.to(this.box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
      TweenLite.to(this.box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
      TweenLite.to(this.box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});*/

      TweenLite.fromTo(this.box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeInOut, onStart: this.onStart});
    },

    onStart() {
      console.log('start');
      // onUpdate, onComplete also available
    }
  }
};
