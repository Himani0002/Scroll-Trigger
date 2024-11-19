document.querySelectorAll(".card ").forEach(
  card=>{
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
  
  }
)

