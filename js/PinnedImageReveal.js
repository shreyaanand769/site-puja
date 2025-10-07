import React, { useMemo, useRef } from 'react'; // 'React' must be imported for createElement
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const PinnedImageReveal = ({ imageUrl, title, description }) => {
  const componentRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const textContentRef = useRef(null);

  const descriptionWords = useMemo(() => description.split(/\s+/), [description]);

  useGSAP(() => {
    // GSAP animation logic remains the same...
    gsap.set(imageWrapperRef.current, { xPercent: -100 });
    gsap.set(".word", { opacity: 0.1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: 'top top',
        end: '+=1500',
        pin: true,
        scrub: 1,
      },
    });

    tl.to(imageWrapperRef.current, {
      xPercent: 0,
      ease: 'power2.inOut',
    });

    tl.to('.word', {
      opacity: 1,
      ease: 'power1.in',
      stagger: 0.1,
    }, '<0.2');

  }, { scope: componentRef, dependencies: [descriptionWords] });

  // This is the converted JSX.
  // React.createElement(type, props, ...children)
  return React.createElement('div', { ref: componentRef, style: styles.component },
    React.createElement('div', { style: styles.contentWrapper },
      React.createElement('div', { ref: imageWrapperRef, style: styles.imageWrapper },
        React.createElement('img', { src: imageUrl, alt: title, style: styles.image })
      ),
      React.createElement('div', { ref: textContentRef, style: styles.textContent },
        React.createElement('h2', null, title),
        React.createElement('p', null,
          descriptionWords.map((word, index) => (
            React.createElement('span', { key: index, className: "word", style: styles.word },
              word + ' ' // Add a space after each word
            )
          ))
        )
      )
    )
  );
};

// --- STYLES (remain the same) ---
const styles = {
  component: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '1200px',
    gap: '40px',
    color: '#333',
    fontFamily: 'sans-serif',
  },
  imageWrapper: {
    flex: 1,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  textContent: {
    flex: 1,
  },
  word: {
    display: 'inline-block',
  },
};

export default PinnedImageReveal;