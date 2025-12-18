const EMOJI_LIST = [
  "🥂",
  "🎅",
  "🎄",
  "🤶",
  "🍒",
  "🎁",
  "🎊",
  "🍷",
  "🎄",
  "🌰",
  "💖",
  "🦃",
  "🎊",
  "⭐",
  "✨",
  "💫",
  "🌟",
  "🎉",
  "🎄",
  "🥳",
  "🥂",
  "🍺",
  "🔥",
  "🕯️",
  "🍰",
  "🎊",
  "❄️",
  "☃️",
  "🛷",
  "🎄",
];

const container = document.getElementById("container");
const circles = [];

const SCALE = 2;

function randEmoji() {
  return EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)];
}

for (let i = 0; i < 20; i++) {
  addCircle(i * 150, [15 + 145, 12], randEmoji());
  addCircle(i * 150, [27 + 145, 12], randEmoji());
  addCircle(i * 150, [39 + 145, 7], randEmoji());
  addCircle(i * 150, [46 + 145, 12], randEmoji());
  addCircle(i * 150, [58 + 145, 12], randEmoji());
  addCircle(i * 150, [70 + 145, 12], randEmoji());
}

function addCircle(delay, range, emoji) {
  setTimeout(function () {
    const x = (range[0] + Math.random() * range[1]) * SCALE;
    const y = (90 + Math.random() * 4) * SCALE;
    const v = {
      x: (-0.15 + Math.random() * 0.3) * SCALE,
      y: (1 + Math.random() * 1) * -SCALE,
    };

    circles.push(new Circle(x, y, emoji, v, range));
  }, delay);
}

class Circle {
  constructor(x, y, emoji, v, range) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.range = range;

    this.element = document.createElement("span");
    this.element.style.opacity = 0;
    this.element.style.position = "absolute";
    this.element.style.fontSize = "26px";
    this.element.innerHTML = emoji;

    container.appendChild(this.element);
  }

  update() {
    if (this.y < -220) {
      this.y = (90 + Math.random() * 4) * SCALE;
      this.x = (this.range[0] + Math.random() * this.range[1]) * SCALE;
    }

    this.y += this.v.y;
    this.x += this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform =
      "translate3d(" + this.x + "px, " + this.y + "px, 0px)";
  }
}

function animate() {
  for (let circle of circles) {
    circle.update();
  }

  requestAnimationFrame(animate);
}

animate();
