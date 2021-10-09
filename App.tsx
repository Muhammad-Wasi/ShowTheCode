import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Provider as ProductProvider} from './src/context/productContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <ProductProvider>
        <Navigation />
      </ProductProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
