gsap.to(".card1", {
  scale: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card1",
    start: "top 15%",
    end: "bottom 15%",
    markers: true,
    scrub: true,
  },
});
gsap.to(".card3", {
  scale: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card1",
    start: "top 15%",
    end: "bottom 15%",
    markers: true,
    scrub: true,
  },
});
