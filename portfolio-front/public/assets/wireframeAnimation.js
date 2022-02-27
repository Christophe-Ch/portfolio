const maxYDistance = 1000;
const maxAnimationDistance = 25;

let easeInOutCubic = (x) => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

let animate = (el, baseY, prop) => {
  const relativeY = baseY - window.innerHeight / 2 - window.scrollY;
  let progression = relativeY / maxYDistance / 2 + 0.5;

  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }

  el.style[prop] = `${
    maxAnimationDistance * 2 * (easeInOutCubic(progression) - 0.5)
  }px`;
};

const texts = [];

document.querySelectorAll(".wireframe-text").forEach((el) => {
  usesBottom =
    [...el.classList].find((c) => c.startsWith("home_bottom")) &&
    window.innerWidth > 1024;

  texts.push({
    el,
    baseY: window.scrollY + el.getBoundingClientRect().y,
    prop: usesBottom ? "bottom" : "top",
  });
});

console.log(texts);

window.addEventListener("scroll", () => {
  texts.forEach(({ el, baseY, prop }) => animate(el, baseY, prop));
});
