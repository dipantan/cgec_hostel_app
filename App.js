import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/store';

import RootNavigation from './src/components/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.backgroundStyle}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
