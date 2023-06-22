const slide = ".slider-content__slider__slides__slide";
const button = ".slider-content__slider__slider-btns";
const prevButton = document.querySelector("button .prev");
console.log();
class Slider {
  constructor(id) {
    this.slider = document.getElementById(id);
    this.images = document.querySelectorAll(slide);
    this.currentImageIndex = 0;
    this.timer = null;
    this.showImage(this.currentImageIndex);
    this.addListeners();
    this.startSlideshow();
  }

  showImage(index) {
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].classList.remove("active");
    }
     this.images[index].classList.add("active");
  }

  // Muestra la siguiente imagen en el slider
  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
    this.showImage(this.currentImageIndex);
  }

  // Muestra la imagen anterior en el slider
  prevImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
    this.showImage(this.currentImageIndex);
  }

  // Inicia la reproducción automática del slider
  startSlideshow() {
    console.log("show started");
    this.timer = setInterval(() => {
      this.nextImage();
    }, 3000);
  }
  // Detiene la reproducción automática del slider
  stopSlideshow() {
    clearInterval(this.timer);
  }

  // Agrega los event listeners a los botones y puntos de navegación del slider
  addListeners() {
    const prevButton = document.querySelector(button + " .prev");
    prevButton.addEventListener("click", () => {
        event.preventDefault();
      this.prevImage();
    });

    const nextButton = document.querySelector(button + " .next");
    nextButton.addEventListener("click", () => {
        event.preventDefault();
      this.nextImage();
    });


    // Detiene la reproducción automática al colocar el mouse sobre el slider
    this.slider.addEventListener("mouseenter", () => {
      this.stopSlideshow();
    });

    // Reanuda la reproducción automática al quitar el mouse del slider
    this.slider.addEventListener("mouseleave", () => {
      this.startSlideshow();
    });
  }
}

const slider = new Slider("slider");
