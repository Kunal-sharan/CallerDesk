import React from 'react';
import { SvgXml } from 'react-native-svg';

const CustomIcon = ({ svgData }) => {
  return <SvgXml xml={svgData} />;
};

export default CustomIcon;
