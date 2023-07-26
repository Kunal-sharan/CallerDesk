import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { IconArrow } from '../../icons/iconarrow';

const Nextbutton = ({ isFirstSlide }) => {
  const size = 58;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(isFirstSlide ? 0:100)).current; // Set to 100 for isFirstSlide
  const progressRef = useRef();

  const animateProgress = () => {
    return Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 11000, // Adjust the duration to make it slower or faster (in milliseconds)
      useNativeDriver: true,
    });
  };

  useEffect(() => {
    if (isFirstSlide) { // Check if it's the first slide, then reset to 100
      progressAnimation.setValue(0);
      animateProgress().start();
    } 
  }, [isFirstSlide]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset = circumference - (circumference * value.value) / 100;
      if (progressRef.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size}>
        {/* Outer Circle */}
        <Circle
          stroke="#E6E7E8"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Inner Circle */}
        <Circle
          ref={progressRef}
          stroke="#F4338F"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // We set the initial value to hide the circle
          rotation={-90}
          origin={`${center},${center}`}
        />
        <View style={{ paddingTop: 8, paddingLeft: 8 }}>
          <IconArrow />
        </View>
      </Svg>
    </View>
  );
};

export default Nextbutton;
