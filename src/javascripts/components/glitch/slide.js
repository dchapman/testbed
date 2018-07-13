import imagesLoaded from 'imagesloaded';

export default {
  name: 'slide',

  data() {
    return {
      isAnimating: false,
      glitchImages: [],
      imageDom: null,
      imageBackground: null
    }
  },

  props: ['index'],

  computed: {
    isCurrent: function() {
      return this.index === this.$parent.current;
    }
  },

  mounted() {
    this.layout();
  },

  methods: {
    layout() {
      this.imageDom = this.$el.querySelector('.slide__image');
      this.imageBackground = this.imageDom.style.backgroundImage;

      for (let i=0; i<this.$parent.glitchAmount; i++) {
        let image =  document.createElement("div");

        image.classList.add("slide__glitch");
        image.style.backgroundImage = this.imageBackground;

        this.imageDom.appendChild(image);
        this.glitchImages.push(image);
      }
    },

    setBgImage(image, pos = 0, delay = 0) {
      console.log(delay);
      setTimeout(() => {this.glitchImages[pos].style.backgroundImage = image}, delay);
    }
  }
};
