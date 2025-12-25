// // preloader

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.getElementById("preloader").style.display = "none";
//   }, 500);
// });

// // preloader

gsap.registerPlugin(SplitText);

const mainHeadline = document.querySelector(".main-headline");
const split = new SplitText(mainHeadline, { type: "chars" });
const chars = split.chars;


const group1 = chars.filter((_, i) => i % 2 === 0);
const group2 = chars.filter((_, i) => i % 2 !== 0);

const tl = gsap.timeline({
  delay: 0.4,
});


tl.from(group1, {
  y: "50vh",   
  opacity: 0,
  delay: 0.25,
  ease: "power3.out",
  stagger: 0.08,
});

tl.from(group2, {
  y: "100vh",    
  opacity: 0,
  ease: "power3.out",
  stagger: 0.1,
}, "-=0.4")     

tl.to(group2, {
  y: 0,       
  duration: 0.6,
  ease: "power3.out",
  stagger: 0.1,
});


// landing screen car model
const modelViewer = document.querySelector('#heroCar');

modelViewer.addEventListener('load', () => {
  const PAINT = modelViewer.model.getMaterialByName('PAINT');
  if (PAINT) {
    PAINT.pbrMetallicRoughness.setBaseColorFactor([0.02, 0.02, 0.02, 1]); 
  }

  const Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material = modelViewer.model.getMaterialByName('Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material');
  if  (Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material) {
    Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material.pbrMetallicRoughness.setBaseColorFactor([0.05, 0.05, 0.05, 1]); 
  }


  modelViewer.dismissPoster();

});


const setupInteractiveMovement = () => {
    const container = modelViewer; 
    const box = modelViewer;
    const movementRange = 15;

    const setBoxX = gsap.quickTo(box, "x", { duration: 0.5, ease: "power2.out" });
    const setBoxY = gsap.quickTo(box, "y", { duration: 0.5, ease: "power2.out" });

    function handleMouseMove(e) {
        const bounds = container.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const newX = gsap.utils.mapRange(0, bounds.width, -movementRange, movementRange, mouseX);
        const newY = gsap.utils.mapRange(0, bounds.height, -movementRange, movementRange, mouseY);

        setBoxX(newX);
        setBoxY(newY);
    }

    function handleMouseLeave() {
        setBoxX(0);
        setBoxY(0);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
};

const entranceTimeline = gsap.timeline({
    onComplete: setupInteractiveMovement 
});

entranceTimeline.from("#heroCar", {
  x: "-120%",
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.8,
  delay: 1,
  ease: "power3.out"
});

// landing screen car model

// landing screen car model
const heroCarMobModel = document.querySelector('#heroCarMob');

heroCarMobModel.addEventListener('load', () => {
  const PAINT = heroCarMobModel.model.getMaterialByName('PAINT');
  if (PAINT) {
    PAINT.pbrMetallicRoughness.setBaseColorFactor([0.02, 0.02, 0.02, 1]); 
  }

  const Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material = heroCarMobModel.model.getMaterialByName('Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material');
  if  (Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material) {
    Koenigsegg_RegeraRewardRecycled_2016BadgeA_Material.pbrMetallicRoughness.setBaseColorFactor([0.05, 0.05, 0.05, 1]); 
  }


  heroCarMobModel.dismissPoster();

});


const interactiveMovement = () => {
    const container = heroCarMobModel; 
    const box = heroCarMobModel;
    const movementRange = 15;

    const setBoxX = gsap.quickTo(box, "x", { duration: 0.5, ease: "power2.out" });
    const setBoxY = gsap.quickTo(box, "y", { duration: 0.5, ease: "power2.out" });

    function handleMouseMove(e) {
        const bounds = container.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const newX = gsap.utils.mapRange(0, bounds.width, -movementRange, movementRange, mouseX);
        const newY = gsap.utils.mapRange(0, bounds.height, -movementRange, movementRange, mouseY);

        setBoxX(newX);
        setBoxY(newY);
    }

    function handleMouseLeave() {
        setBoxX(0);
        setBoxY(0);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
};

const enterTimeline = gsap.timeline({
    onComplete: interactiveMovement 
});

enterTimeline.from("#heroCarMob", {
  x: "-120%",
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.8,
  delay: 1,
  ease: "power3.out"
});

// landing screen car model MOB

// main hero (color changer)

  function hexToRGBA(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  return [r, g, b, alpha];
}

const mainHeroCar = document.querySelector('#mainHeroCar');
const colorButtons = document.querySelectorAll('.color-changer-colors');

mainHeroCar.addEventListener('load', () => {
  const PAINT = mainHeroCar.model.getMaterialByName('PAINT');

  colorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {

      colorButtons.forEach(b =>
        b.classList.remove('color-changer-colors-focused')
      );
      btn.classList.add('color-changer-colors-focused');

      if (!PAINT) return;

      if (btn.classList.contains('color-changer-purple')) {
        PAINT.pbrMetallicRoughness.setBaseColorFactor(hexToRGBA('#040106ff'));
      }

      if (btn.classList.contains('color-changer-blue')) {
        PAINT.pbrMetallicRoughness.setBaseColorFactor(hexToRGBA('#315c6fff'));
      }

      if (btn.classList.contains('color-changer-red')) {
        PAINT.pbrMetallicRoughness.setBaseColorFactor(hexToRGBA('#3F0001'));
      }

    });
  });
});

// main hero (color changer)


// slider
const cars = [
  {
    name: "Regera",
    tagline: "Hybrid hypercar with instant torque.",
    brandLogo: "imgs/koenigsegg-logo.png",
    modelLogo: "imgs/regera-logo.png",
    model: "3D-Models/Koenigsegg/Regera/2015_koenigsegg_regera.glb"
  },
  {
    name: "Jesko",
    tagline: "Track-focused extreme performance.",
    brandLogo: "imgs/koenigsegg-logo.png",
    modelLogo: "imgs/regera-logo.png",
    model: "3D-Models/Koenigsegg/Regera/2015_koenigsegg_regera.glb"
  },
  {
    name: "Gemera",
    tagline: "Four-seat megacar innovation.",
    brandLogo: "imgs/koenigsegg-logo.png",
    modelLogo: "imgs/regera-logo.png",
    model: "3D-Models/Koenigsegg/Regera/2015_koenigsegg_regera.glb"
  }
];

const sliderTrack = document.getElementById("sliderTrack");
const carLogo = document.querySelector(".sec1-content .icon-logo");
const carTagline = document.querySelector(".sec1-content h5");

let currentIndex = Math.floor(cars.length / 2);

function renderSlider() {
  sliderTrack.innerHTML = "";

  cars.forEach((car, index) => {
    const slide = document.createElement("div");
    slide.className = `slide ${index === currentIndex ? "active" : ""}`;

    slide.innerHTML = `
      <img class="car-logo-bg" src="${car.brandLogo}" alt="Brand Logo" style="opacity: ${index === currentIndex ? '1' : '0'};">
      <model-viewer class="sec1-car"
                    src="${car.model}"
                    camera-orbit="0deg 90deg"
                    bounds="tight"
                    camera-controls
                    interaction-prompt="none"
                    disable-tap
                    disable-zoom>
      </model-viewer>
    `;

    slide.onclick = () => {
      currentIndex = index;
      updateContent();
    };

    sliderTrack.appendChild(slide);
  });
}

function updateContent() {
  const car = cars[currentIndex];

  carLogo.src = car.modelLogo;
  carTagline.textContent = car.tagline;

  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    const brandLogo = slide.querySelector(".car-logo-bg");
    
    if (index === currentIndex) {
      slide.classList.add("active");
      brandLogo.style.opacity = "1";
    } else {
      slide.classList.remove("active");
      brandLogo.style.opacity = "0";
    }
  });
}

document.getElementById("nextBtn").onclick = () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateContent();
};

document.getElementById("prevBtn").onclick = () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateContent();
};

renderSlider();

const initialCar = cars[currentIndex];
carLogo.src = initialCar.modelLogo;
carTagline.textContent = initialCar.tagline;
// slider

// section 2

gsap.registerPlugin(ScrollTrigger);

const sec2Text = document.querySelector('.sec2 h3');
const textContent = sec2Text.textContent;
const words = textContent.split(' ');

sec2Text.innerHTML = words.map(word => `<span class="sec2-word">${word}</span>`).join(' ');

const sec2WordElements = document.querySelectorAll('.sec2-word');

sec2WordElements.forEach(word => {
    word.addEventListener('mouseenter', function() {
        const currentTop = this.offsetTop;
        
        sec2WordElements.forEach(w => {
            if (Math.abs(w.offsetTop - currentTop) < 5) {
                w.style.color = '#907CB2';
            }
        });
    });

    word.addEventListener('mouseleave', function() {
        const currentTop = this.offsetTop;
        
        sec2WordElements.forEach(w => {
            if (Math.abs(w.offsetTop - currentTop) < 5) {
                w.style.color = '#6F7081';
            }
        });
    });
});

gsap.from('.sec2-word', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.03,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.sec2',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// section 2

// section 6

const track = document.querySelector(".partners-carousel");

const marqueeTween = gsap.to(track, {
  xPercent: -50,
  repeat: -1,
  ease: "linear",
  duration: 30
});

let lastScrollY = window.scrollY;
let scrollTimeout;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;

  if (delta > 0) {
    gsap.to(marqueeTween, { timeScale: 2, duration: 0.3 });
  } else if (delta < 0) {
    gsap.to(marqueeTween, { timeScale: -2, duration: 0.3 });
  }

  lastScrollY = currentScrollY;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    gsap.to(marqueeTween, { timeScale: 1, duration: 0.6, ease: "power3.out" });
  }, 120);
});

track.addEventListener("mouseenter", () => marqueeTween.pause());
track.addEventListener("mouseleave", () => marqueeTween.play());



// section 6



// favicon aligning with user's preferred system theme
const faviconTag = document.getElementById("dynamic-favicon");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
    if (isDark.matches) {
        faviconTag.href = "icons/favicon-dark.svg";
    } else {
        faviconTag.href = "icons/favicon-light.svg";
    }
};

changeFavicon();

isDark.addEventListener("change", changeFavicon);
// favicon aligning with user's preferred system theme
