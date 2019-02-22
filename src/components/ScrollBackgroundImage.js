import React, { useState, useEffect } from 'react';
import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

export function ScrollBackgroundImage(props) {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    function handleWindowScroll(e) {
      setScrollOffset(-(window.scrollY / 5 ));
    }

    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [scrollOffset, setScrollOffset]);


  return (
    <img {...props} style={{...props.style, transform: `translateY(${scrollOffset}px)`, willChange: 'transform'}} />
    // <img {...props} style={{...props.style, transform: `translateY(${scrollOffset}px) rotateX(45deg) rotateY(6deg) rotateZ(-15deg)`}} />
  );
}
