import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Button () {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
          Contirmar
      </Text>
    </TouchableOpacity>
  )
};