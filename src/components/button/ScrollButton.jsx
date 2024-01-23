import { useState, useEffect, useRef } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollHeight = window.scrollY;

      const bodyHeight = document.body.clientHeight;
      const rootHeight = document.documentElement.clientHeight;
      const height = bodyHeight - rootHeight;

      let percent = (scrollHeight / height) * 100;

      scrollHeight > 100 ? setIsVisible(true) : setIsVisible(false);

      buttonRef.current.style.background = `conic-gradient(#999 ${percent}%, rgba(0,0,0,0.1) ${percent}%)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <button
      className={`scroll-button ${isVisible ? 'fixed' : 'hidden'}`}
      ref={buttonRef}
      onClick={scrollToTop}>
      <span className='progress-bar'>
        <FaChevronUp className='text-lg' />
      </span>
    </button>
  );
};

export default ScrollButton;
