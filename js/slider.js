class Slider {
  constructor(id) {
    this.slider = document.getElementById(id);
    this.images = this.slider.getElementsByTagName('img');
    this.currentImageIndex = 0;
    this.timer = null;
    
    this.showImage (this.currentImageIndex);
    this.addListeners();
    this.startSlidesshow();
  }


  showImage(index){
    for (let i = 0; i < this.images.length; i++) {
        this.images[i].classList.remove('active');

    }
    console.log(this.images);
   this.images[index].classList.add('active');     
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
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Prev';
    prevButton.addEventListener('click', () => {
      this.prevImage();
    });
    this.slider.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      this.nextImage();
    });
    this.slider.appendChild(nextButton);

    for (let i = 0; i < this.images.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        this.showImage(i);
        this.currentImageIndex = i;
      });
      this.slider.appendChild(dot);
    }

    // Detiene la reproducción automática al colocar el mouse sobre el slider
    this.slider.addEventListener('mouseenter', () => {
      this.stopSlideshow();
    });

    // Reanuda la reproducción automática al quitar el mouse del slider
    this.slider.addEventListener('mouseleave', () => {
      this.startSlideshow();
    });
  }

}

const slider = new Slider('slider');