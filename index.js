import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const index = () => {
  const handleCardPress = () => {
    console.log('Card Pressionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCardPress}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Reconhecimento de emocões através de expressões faciais.</Title>
            <Paragraph>Clicando neste card o aplicativo faz uma analise das expressões faciais de qualquer pessoa para saber oq esta sentindo no momento.</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:"#B0E0E6",
  },
  card: {
    width: 380, 
  },
});

export default index;