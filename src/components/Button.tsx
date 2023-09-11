import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Button () {
  return(
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
          Contirmar
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})