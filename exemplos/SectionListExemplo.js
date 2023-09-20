import React from 'react';
import { View, Text, SectionList, Button } from 'react-native';
import styles from '../style/style';

const SectionListExemplo = ({ goBack }) => {
  const data = [
    { title: 'A', data: ['Abacaxi', 'Amora', 'Abacate'] },
    { title: 'B', data: ['Banana', 'Blueberry'] },
    { title: 'C', data: ['Cereja', 'Coco'] },
    { title: 'D', data: ['Maçã', 'Uva', 'Abacaxi'] },
    { title: 'E', data: ['Melancia', 'Melão'] },
    { title: 'F', data: ['Pera', 'Kiwi'] },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
};

export default SectionListExemplo;