import React from 'react'
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native'

const questions = [
  {id: '1', question: 'Capital of France?', answer: 'Paris'}
];
export default function App() {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const opacity = React.useRef(new Animated.Value(0)).current;

  const toggle = () => {
    setShowAnswer(!showAnswer);
    Animated.timing(opacity, {toValue: showAnswer ? 0 : 1, duration: 200, useNativeDriver: true}).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity}}>
        <Text style={styles.question}>What is 2+2?</Text>
        {showAnswer && <Text style={styles.answer}>4</Text>}
      </Animated.View>
      <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>{showAnswer ? 'Next' : 'Show Answer'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#111', justifyContent: 'center', alignItems: 'center'},
  question: {fontSize: 24, color: '#fff', marginBottom: 20},
  answer: {fontSize: 24, color: '#4caf50', marginBottom: 20},
  button: {backgroundColor: '#333', padding: 10, borderRadius: 5},
  buttonText: {color: '#fff', fontWeight: '600'}
});