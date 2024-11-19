// Function to apply GSAP animation with ScrollTrigger for all cards
const animateCard = (cardClass) => {
  gsap.to(cardClass, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: cardClass,
      start: "top 15%",
      end: "bottom 15%",
      markers: true,
      scrub: true, // Ensure smooth scrolling animations
    },
  });
};

// Apply animation to all card classes
const cardClasses = [
  ".card1",
  ".card2",
  ".card3",
  ".card4",
  ".card5",
  ".card6",
];
cardClasses.forEach((cardClass) => animateCard(cardClass));
