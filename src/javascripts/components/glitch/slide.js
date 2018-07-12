import imagesLoaded from 'imagesloaded';

export default {
  name: 'slide',

  data() {
    return {
      glitchImages: []
    }
  },

  props: ['glitchAmount'],

  computed: {
    image: function() {
      return this.$el.querySelector('.slide__image');
    },
    imageBackground: function() {
      return this.image.style.backgroundImage;
    }
  },

  mounted() {
    console.log(imagesLoaded);

    this.layout();
  },

  methods: {
    layout() {
      for (i=0; i<this.glitchAmount; i++) {
        let image =  document.createElement("div");

        image.classList.add("slide__image");
        image.style.backgroundImage = this.imageBackground;

        this.glitchImage.appendChild(image);
        this.glitchImages.push(image);
      }
    },

    changeBgImage(image, pos = 0, delay = 0) {
      setTimeout(() => this.glitchImages[pos].style.backgroundImage = image, delay);
    }
  }
};
