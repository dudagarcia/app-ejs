import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ReguaHorarios = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.hour}>08:00</Text>
          <Text style={styles.hour}>08:30</Text>
          <Text style={styles.hour}>09:00</Text>
          <Text style={styles.hour}>09:30</Text>
          <Text style={styles.hour}>10:00</Text>
          <Text style={styles.hour}>10:30</Text>
          <Text style={styles.hour}>11:00</Text>
          <Text style={styles.hour}>11:30</Text>
          <Text style={styles.hour}>12:00</Text>
          <Text style={styles.hour}>12:30</Text>
          <Text style={styles.hour}>13:00</Text>
          <Text style={styles.hour}>13:30</Text>
          <Text style={styles.hour}>14:00</Text>
          <Text style={styles.hour}>14:30</Text>
          <Text style={styles.hour}>15:00</Text>
          <Text style={styles.hour}>15:30</Text>
          <Text style={styles.hour}>16:00</Text>
          <Text style={styles.hour}>16:30</Text>
          <Text style={styles.hour}>17:00</Text>
          <Text style={styles.hour}>17:30</Text>
          <Text style={styles.hour}>18:00</Text>
          <Text style={styles.hour}>18:30</Text>
          <Text style={styles.hour}>19:00</Text>
          <Text style={styles.hour}>19:30</Text>
          <Text style={styles.hour}>20:00</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    hour:{
        color: 'rgba(255, 255, 255, 0.8)',
        marginVertical: 0.75
    },
    container: {
        marginTop: 22
    }
});

export default ReguaHorarios;