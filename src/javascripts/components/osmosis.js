import {TweenLite, CSSPlugin, EasePack} from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";
import debounce from "lodash/debounce";

export default {
  name: 'osmosis',

  data() {
    return {
      video: null,
      duration: 0,
      master: new TimelineMax(),
      isTransitioning: false,
      current: 1,
      total: 20
    }
  },

  mounted() {
    this.video = document.getElementById('test-video');

    if(this.video) {
      this.video.addEventListener('loadedmetadata', this.init.bind(this), false);
    }
  },

  methods: {
    init() {
      this.duration = this.video.duration;

      window.addEventListener('scroll', function() {
        console.log('boop');
      });

      window.addEventListener('wheel', debounce(this.onWheel.bind(this), 5));

    },

    onWheel(e) {
      e.preventDefault();

      if (this.isTransitioning) return;
      this.isTransitioning = true;

      let newCurrent;
      const dir = e.deltaY <= 0 ? 'up' : 'down';

      if (dir === 'down') {
        newCurrent = this.current < this.total ? this.current + 1 : 1;
      } else {
        newCurrent = this.current > 1 ? this.current -1 : this.total;
      }

      this.playVideoSegment(newCurrent).then(() => {
        this.current = newCurrent;
        this.isTransitioning = false;
      });
    },

    playVideoSegment(newCurrent) {
      return new Promise((resolve, reject) => {
        const stopTime = this.current * (this.duration / this.total);

        this.video.play();

        this.video.addEventListener("timeupdate", function handler(e) {
          if(e.target.currentTime >= stopTime) {
            e.target.pause();

            e.target.removeEventListener("timeupdate", handler, false);

            resolve();
          }
        }, false);
      });
    },

    resetVideo() {
      this.video.currentTime = 0;
      this.current = 1;
      this.isTransitioning = false;
    }
  }
};
