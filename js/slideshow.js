import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const slides = gsap.utils.toArray(".slide");
  const container = document.querySelector(".slides-container");

  const horizontalScrollTween = gsap.to(container, {
    xPercent: -100 * (slides.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#slideshow-section",
      pin: true,
      scrub: 1,
      end: () => "+=" + (container.offsetWidth - window.innerWidth),
    }
  });

  slides.forEach((slide) => {
    const textP = slide.querySelector(".reveal-text");
    if (!textP) return;
    const words = textP.innerText.split(/\s+/);
    textP.innerHTML = words.map(word =>
      `<span class="word-wrapper"><span class="word">${word}</span></span>`
    ).join(' ');
    const wordSpans = textP.querySelectorAll(".word");

    gsap.to(wordSpans, {
      y: "0%",
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: slide,
        containerAnimation: horizontalScrollTween,
        start: "left 60%",
        end: "center 50%",
        toggleActions: "play reverse play reverse",
      }
    });
  });
});
