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


// ===== MAIN HERO MODEL (color changer) =====

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
        PAINT.pbrMetallicRoughness.setBaseColorFactor(hexToRGBA('#050107ff'));
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
