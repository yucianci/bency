import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './styles';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none', border: '2px solid #353535', borderRadius: '100%', background: '#353535',
        }}
      />
    </Button>
  );
};

export default ScrollButton;
