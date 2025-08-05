
import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  onDone: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onDone }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onDone();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onDone]);

  return (
    <div
      className={`fixed top-5 right-5 bg-green-600 text-white py-3 px-5 rounded-lg shadow-lg transition-opacity duration-300 z-50 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
