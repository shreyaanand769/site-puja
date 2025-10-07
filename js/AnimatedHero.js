// AnimationCard.jsx

import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimationCard = ({ imageUrl, title, text }) => {
  const cardRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const textContentRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageWrapper.querySelector('img');
    const titleEl = textContentRef.current.querySelector('h2');
    const textEl = textContentRef.current.querySelector('p');

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%', // Animation starts when the top of the card is 80% from the top of the viewport
        toggleActions: 'play none none none', // Play the animation once when it enters the viewport
      },
    });

    // 1. Image slide-in animation
    tl.from(image, {
      xPercent: -100, // Start from 100% to the left
      duration: 1.2,
      ease: 'power3.out',
    });

    // 2. Text reveal animation (staggered)
    // We target the title and text separately for a nice effect
    tl.from([titleEl, textEl], {
      y: 40, // Start 40px below the final position
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Add a 0.2s delay between the title and the text animation
      ease: 'power2.out',
    }, "-=0.8"); // Overlap with the end of the image animation for a smoother transition

  }, { scope: cardRef }); // Scope the GSAP context to this component

  return (
    <div ref={cardRef} style={styles.card}>
      <div ref={imageWrapperRef} style={styles.imageWrapper}>
        <img src={imageUrl} alt={title} style={styles.image} />
      </div>
      <div ref={textContentRef} style={styles.textContent}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Basic styling for the component
const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '50px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // This is crucial for the animations
    fontFamily: 'sans-serif',
  },
  imageWrapper: {
    flex: '1 1 50%',
    overflow: 'hidden', // Hides the part of the image that is outside this container
  },
  image: {
    width: '100%',
    display: 'block',
  },
  textContent: {
    flex: '1 1 50%',
    padding: '40px',
    // The overflow: 'hidden' on the parent card helps contain the text reveal
  },
};

export default AnimationCard;