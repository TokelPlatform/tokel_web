import React, { useRef, useEffect, ReactChildren } from 'react';
/* eslint-disable no-undef */

type OutsideAlerterProps = {
  detectClickOutside: (boolean) => void;
  children: ReactChildren;
};
/**
 * Component that alerts if you click outside of it
 */
const OutsideAlerter = ({ detectClickOutside, children }: OutsideAlerterProps) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        console.log('click outside');
        detectClickOutside(true);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, detectClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
