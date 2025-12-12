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
