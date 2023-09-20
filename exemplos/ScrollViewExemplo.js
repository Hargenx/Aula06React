import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import styles from '../style/style';

const ScrollViewExemplo = ({goBack}) => {
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);
  
  return (
    <View>
    <ScrollView contentContainerStyle={styles.containersv}>
      {data.map((item) => (
        <Text style={styles.item} key={item}>
          {item}
        </Text>
      ))}
    </ScrollView>
    <Button title="Voltar" onPress={goBack} />
    </View>
    
  );
};

export default ScrollViewExemplo;