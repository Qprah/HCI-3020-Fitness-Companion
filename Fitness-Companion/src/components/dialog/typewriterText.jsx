import React ,{ useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 100, infinite = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text.charAt(currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite && currentIndex === text.length) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default TypewriterText;
