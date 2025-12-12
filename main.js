gsap.registerPlugin(SplitText);

const mainHeadline = document.querySelector(".main-headline");
const split = new SplitText(mainHeadline, { type: "chars" });
const chars = split.chars;

// GROUPS
const group1 = chars.filter((_, i) => i % 2 === 0); // even index letters
const group2 = chars.filter((_, i) => i % 2 !== 0); // odd index letters

const tl = gsap.timeline();

// GROUP 1 — start mid, go to top
tl.from(group1, {
  y: "50vh",     // middle of viewport
  opacity: 0,
  ease: "power3.out",
  stagger: 0.08,
});

// GROUP 2 — start bottom → STOP MID → GO TOP
tl.from(group2, {
  y: "100vh",    // from very bottom
  opacity: 0,
  ease: "power3.out",
  stagger: 0.1,
}, "-=0.4")      // overlap a bit with group1

// THEN MOVE TO FINAL POSITION
tl.to(group2, {
  y: 0,          // final aligned position
  duration: 0.6,
  ease: "power3.out",
  stagger: 0.1,
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
