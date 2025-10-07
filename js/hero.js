import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroImgHolder = document.querySelector(".hero-img");
  const heroImg = heroImgHolder.querySelector("img");

  // ✅ Your custom images
  const customImages = [
    "/images/hero/img8.jpg",
    "/images/hero/img7.jpg",
    "/images/hero/img3.jpg",
    "/images/hero/img5.jpg",
  ];

  let currentImageIndex = 0;
  let scrollTriggerInstance = null;

  // ✅ Function to change image with fade
  const changeImage = () => {
    // Fade out current image
    gsap.to(heroImg, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Change image after fade out
        currentImageIndex =
          currentImageIndex >= customImages.length - 1 ? 0 : currentImageIndex + 1;

        heroImg.src = customImages[currentImageIndex];

        // Fade in new image
        gsap.to(heroImg, { opacity: 1, duration: 0.5 });
      },
    });
  };

  // Start slideshow
  setInterval(changeImage, 3000); // every 3s

  // ✅ Scroll-triggered animations
  const initAnimations = () => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".hero-img-holder",
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(".hero-img", {
          y: `${-110 + 110 * progress}%`,
          scale: 0.25 + 0.75 * progress,
          rotation: -15 + 15 * progress,
        });
      },
    });
  };

  initAnimations();

  window.addEventListener("resize", () => {
    initAnimations();
  });
});
