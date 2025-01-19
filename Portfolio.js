const def = new Map([
  [
    "slide1",
    {
      id: "slide1",
      top: 500,
      bottom: 1900,
      topStyle: { opacity: 0, translateY: -60 },
      bottomStyle: { opacity: 0, translateY: 60 },
      animations: [
        {
          enabled: false,
          top: 500,
          bottom: 1900,
          easing: (x) => x, // Linear easing
          styles: [{ name: "translateY", topValue: 60, bottomValue: -60 }],
        },
        {
          enabled: false,
          top: 500,
          bottom: 800,
          easing: (x) => x,
          styles: [{ name: "opacity", topValue: 0, bottomValue: 1 }],
        },
        {
          enabled: false,
          top: 1400,
          bottom: 1900,
          easing: (x) => x,
          styles: [{ name: "opacity", topValue: 1, bottomValue: 0 }],
        },
      ],
    },
  ],
]);

const elements = {
  "sticky-container": document.getElementById("sticky-container"),
  slide1: document.getElementById("slide1"),
  slide2: document.getElementById("slide2"),
  slide3: document.getElementById("slide3"),
};

const disabled = new Map(def);
const enabled = new Map();

function applyStyle(element, styleName, value) {
  if (styleName === "translateY") {
    element.style.transform = `translateY(${value}px)`;
    return;
  }
  element.style[styleName] = `${value}`;
}

function applyStyles(id, styles, rate) {
  styles.forEach(({ name, topValue, bottomValue }) => {
    const value = topValue + (bottomValue - topValue) * rate;
    applyStyle(elements[id], name, value);
  });
}

function applyAnimations(currentPos, id) {
  const animations = def.get(id)?.animations;
  if (!animations) return;

  animations.forEach((animation) => {
    const { top, bottom, easing, styles } = animation;
    if (currentPos >= top && currentPos <= bottom) {
      const rate = easing((currentPos - top) / (bottom - top));
      applyStyles(id, styles, rate);
    }
  });
}

function onScroll() {
  const scrollTop = window.scrollY;
  const currentPos = scrollTop + window.innerHeight / 2;

  def.forEach((obj, id) => {
    if (currentPos >= obj.top && currentPos <= obj.bottom) {
      enabled.set(id, obj);
      disabled.delete(id);
    } else {
      disabled.set(id, obj);
      enabled.delete(id);
    }
  });

  enabled.forEach((_, id) => {
    applyAnimations(currentPos, id);
  });
}

window.addEventListener("scroll", onScroll);
