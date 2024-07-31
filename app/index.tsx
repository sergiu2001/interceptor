import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { homeStyles as styles } from '../assets/styles/gameStyle';

const SWIPE_THRESHOLD = 100;

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const menuOptions = ['Check Contract', 'Profile', 'Settings', 'Exit'];
  const [selectedOption, setSelectedOption] = useState(0);
  const [lastOffset, setLastOffset] = useState(0);

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    const { translationY } = event.nativeEvent;
    const direction = translationY - lastOffset > SWIPE_THRESHOLD ? 'down' : (lastOffset - translationY > SWIPE_THRESHOLD ? 'up' : null);

    if (direction) {
      setLastOffset(translationY);
      if (direction === 'up' && selectedOption > 0) {
        setSelectedOption(selectedOption - 1);
      } else if (direction === 'down' && selectedOption < menuOptions.length - 1) {
        setSelectedOption(selectedOption + 1);
      }
    }
  };

  const handleNavigate = () => {
    const routes = ['/check-contract', '/profile', '/settings', '/exit'];
    router.push(routes[selectedOption] as any);
  };

  const renderItem = ({ item, index }: { item: string, index: number }) => (
    <View key={index} style={styles.menuItem}>
      <Text style={[styles.arrow, styles.greenText]}>{selectedOption === index ? '>' : ' '}</Text>
      <Text style={[styles.menuText, styles.greenText]}>{item}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.container}>
          <Text style={[styles.title, styles.greenText, styles.monospace]}>Interceptor</Text>
          <FlatList
            data={menuOptions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={selectedOption}
            style={styles.menu}
          />
          <View style={styles.buttons}>
            <Text style={[styles.instructionText, styles.greenText, styles.monospace]}>Swipe up or down to navigate</Text>
            <TouchableOpacity onPress={handleNavigate} style={styles.button}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
