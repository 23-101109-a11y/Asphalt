gsap.registerPlugin(SplitText);

const mainHeadline = document.querySelector(".main-headline");
const split = new SplitText(mainHeadline, { type: "chars" });
const chars = split.chars;


const group1 = chars.filter((_, i) => i % 2 === 0);
const group2 = chars.filter((_, i) => i % 2 !== 0);

const tl = gsap.timeline();


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
  // 1. Target the material and set to black
  const PAINT = modelViewer.model.getMaterialByName('PAINT');
  if (PAINT) {
    // [r, g, b, a] normalized 0-1
    PAINT.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, 1]); 
  }

  // 2. Reveal the model now that it's ready
  modelViewer.dismissPoster();
  
  // 3. Fade in the component
  modelViewer.style.opacity = 1;
});

gsap.from("#heroCar", {
  x: "-120%",
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.8,
  delay: 1,
  ease: "power3.out"
});

gsap.to("#heroCar", {
  x: 0,
  opacity: 1,
  duration: 1.6,
  delay: 2,
  ease: "power3.out"
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
