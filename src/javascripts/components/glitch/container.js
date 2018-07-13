import Slide from './slide';

export default {
  name: 'glitch',

  data() {
    return {
      isTransitioning: false,
      current: 1,
      total: 0
    }
  },

  props: ['glitchAmount', 'glitchDuration'],

  mounted() {
    this.total = Object.keys(this.$refs).length;
  },

  methods: {
    glitch(from, to) {
      return new Promise((resolve, reject) => {
        from.isAnimating = true;

        const count = this.glitchAmount;
        const duration = this.glitchDuration;

        for (let i = count-1; i >= 0; --i) {
          let delay = (duration/(count+5)*(count-i-1) + duration/(count+1))*10;

          console.log(delay);

          from.setBgImage(to.imageBackground, i, delay);
        }

        setTimeout(() => {
          from.isAnimating = false;

          for (let i=0; i<count; i++) {
            from.setBgImage(from.imageBackground, i, 0);
          }

          resolve();
        }, this.glitchDuration);
      });
    },

    navigate(dir) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;

      /*const newCurrent =  dir === 'next' ?
        this.current < this.total ? this.current + 1 : 0 :
        this.current > 1 ? this.current - 1 : this.slidesTotal - 1;*/

      let newCurrent;

      if (dir === 'next') {
        newCurrent = this.current < this.total ? this.current + 1 : 1;
      } else {
        newCurrent = this.current > 1 ? this.current -1 : this.total;
      }

      this.glitch(this.$refs[this.current], this.$refs[newCurrent]).then(() => {
        this.current = newCurrent;
        this.isTransitioning = false;
      });
    }
  },

  components: {
    Slide
  }
};
