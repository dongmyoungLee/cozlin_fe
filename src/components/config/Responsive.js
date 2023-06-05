import React from 'react';
import {useMediaQuery} from 'react-responsive';

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    maxWidth : 899
  });

  return <>{isMobile && children}</>
}

export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({
    minWidth : 900,
    maxWidth : 1023
  });

  return <>{isTablet && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    minWidth : 1024
  });

  return <>{isPc && children}</>
}