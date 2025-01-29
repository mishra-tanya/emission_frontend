import { useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimationProps {
  target: string;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

const useGsapAnimation = ({ target, from, to }: AnimationProps) => {
  useEffect(() => {
    const animation = gsap.fromTo(target, from, to);

    return () => {
      animation.kill();
    };
  }, [target, from, to]);
};

export default useGsapAnimation;
