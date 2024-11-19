gsap.to(".card1", {
  scale: 0.7,
  opacity: 0,
  ScrollTrigger: {
    trigger: ".card1",
    start: "top 15%",
    end: "bottom 15%",
  },
});
