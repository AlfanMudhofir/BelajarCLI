import React from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';

const App = () =>{
  return (
    <View>
      <ScrollView>
        {/*<SampleComponent />*/}
        {/*<StylingComponent />*/}
        {/*<FlexBox />*/}
        {/*<Position />*/}
        {/*<PropsDinamis />*/}
        {/*<StateDinamis />*/}
        {/*<Communication />*/}
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;