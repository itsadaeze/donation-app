import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';


const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    <Header title={'Adaeze U.'} type={1}/>
    <Header title={'Adaeze U.'} type={2}/>
    <Header title={'Adaeze U.'} type={3}/>
    </SafeAreaView>
  );
};

export default Home;
