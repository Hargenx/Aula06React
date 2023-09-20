import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styles from '../style/style';

const FlatListExemplo = ({ goBack }) => {
  const data = Array.from({ length: 100 }, (_, index) => ({ key: index.toString(), value: index + 1 })
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>Item {item.value}</Text>}
      />
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
};

export default FlatListExemplo;