import { useEffect, useRef, useState } from 'react';

import { useSelectors } from '../../hooks';
import { Toast } from './components';
import { useStyles } from './toast-container-styles';

const ToastContainer = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>();
  const { toasts } = useSelectors.Toast();
  const classes = useStyles({ width });

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current?.clientWidth);
    }
  }, [toasts.length]);

  return (
    <div
      className={classes.root}
      data-testid='toast-container'
      ref={containerRef}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
