import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput
} from  'react-native';

export function UserIdentification(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            😄
          </Text>
          <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>
          <TextInput
              style={styles.input}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}