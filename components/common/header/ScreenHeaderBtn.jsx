import React from 'react';
import {TouchableOpacity , Image  } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({iconUrl, dimension, handelpress }) => {
  return (
    <TouchableOpacity 
    style={styles.btnContainer}
    onPress = {handelpress}
    >
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
};

export default ScreenHeaderBtn;