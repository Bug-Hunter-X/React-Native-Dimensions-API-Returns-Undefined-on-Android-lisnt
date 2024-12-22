import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      const dimensions = Dimensions.get('window');
      setScreenDimensions(dimensions);
    };

    getDimensions();
  }, []);

  if (!screenDimensions) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsBugSolution;