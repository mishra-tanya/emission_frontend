import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TypingEffectProps {
  text: string; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          textContent: '', 
        },
        {
          textContent: text, 
          duration: text.length * 0.1,
          ease: 'power1.inOut',
        }
      );
    }
  }, [text]);

  return (
    <h1>
      <span ref={textRef} />
    </h1>
  );
};

export default TypingEffect;
