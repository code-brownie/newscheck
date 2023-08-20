function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();
var timeout;
const mousefollower = (xscale, yscale) => {
  const ms = document.querySelector(".mini-circle");
  window.addEventListener("mousemove", (dets) => {
    ms.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
};

const cursorskew = () => {
  var xscale = 1;
  var yscale = 1;

  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY);

    const circle = document.querySelector(".mini-circle");
    const circleSize = 15;

    const circleX = dets.clientX - circleSize / 2;
    const circleY = dets.clientY - circleSize / 2;

    mousefollower(xscale, yscale);
    timeout = setTimeout(() => {
      circle.style.transform = `translate(${circleX}px, ${circleY}px) scale(${1},${1})`;
    }, 100);
  });
};
mousefollower();
cursorskew();
// menu dropdown
const menuFunction = () => {
  const tl = gsap.timeline();

  tl.to(".s2", { y: 27, ease: "power4.out", duration: 0.3 });
  tl.to(".b", {
    y: 26,
    x: 20,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
};
const arrow = document.querySelector("i");
arrow.addEventListener("click", function () {
  const tl = gsap.timeline();

  tl.to(".b", {
    y: -27,
    x: 20,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
  tl.to(".s2", { y: -2, ease: "power4.out", duration: 0.3 });
});
var cpy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(cpy);

const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");

// Format the time as "hh:mm"
const timeFormat = `${hours}:${minutes}`;

console.log("Current time:", timeFormat);

document.querySelector(".footer-left .date").innerHTML = `${timeFormat}  IST`;
if (window.innerWidth >= 1200) {
  gsap.to(".image", {
    y: -200,
    backgroundPositionY: "90%",

    duration: 1.5,

    scrollTrigger: {
      scroller: ".main",
      trigger: ".image",
      start: "top 65%",
      end: "top 0%",
      scrub: 2,
    },
  });
  // about section
  gsap.from(".second .title", {
    x: -500,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".second .title",
      start: "top 100%",
      end: "bottom 10%",
    },
  });
  gsap.from(".second .overview", {
    x: 600,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".second .overview",
      start: "top 100%",
      end: "bottom 10%",
    },
  });
  gsap.from(".preview h1", {
    opacity: 0,
    y: 200,
    duration: 1,
    scrollTrigger: {
      trigger: ".preview h1",
      scroller: ".main",
      start: "top 90%",
      end: "bottom 0%",
    },
  });
  gsap.from(".col-1", {
    x: -800,
    duration: 1,
    scrollTrigger: {
      trigger: ".col-1",
      scroller: ".main",
      start: "top 85%",
      end: "bottom 10%",
    },
  });
  gsap.from(".col-2", {
    x: 800,
    duration: 1,
    scrollTrigger: {
      trigger: ".col-1",
      scroller: ".main",
      start: "top 85%",
      end: "bottom 10%",
    },
  });
}
if (window.innerWidth <= 1000) {
  gsap.from(".second .title", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".second .title",
      start: "top 80%",
      end: "bottom 10%",

    },
  });
  gsap.from(".second .overview", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".second .overview",
      start: "top 75%",
      end: "bottom 10%",
    },
  });
  gsap.from(".preview h1", {
    opacity: 0,
    y: 200,
    duration: 1,
    scrollTrigger: {
      trigger: ".preview h1",
      scroller: ".main",
      start: "top 90%",
      end: "bottom 0%",
    },
  });
  gsap.from(".col-1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".col-1",
      scroller: ".main",
      start: "top 85%",
      end: "bottom 10%",
    },
  });
  gsap.from(".col-2", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".col-2",
      scroller: ".main",
      start: "top 85%",
      end: "bottom 10%",
    },
  });
}
