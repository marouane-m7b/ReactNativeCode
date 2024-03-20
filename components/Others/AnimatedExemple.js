import React, { useEffect, useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

function AnimatedExemple() {
  const ourDecayAnimation = useRef(new Animated.Value(0)).current;
  const ourTimingAnimation = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.decay(ourDecayAnimation, {
      velocity: 0.1,
      deceleration: 0.997,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(ourTimingAnimation, {
      toValue: 1,
      duration: 10000,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }, [ourTimingAnimation]);


  return (
    <View>
      <Button onPress={handleAnimation} title="Animate" />
      <Animated.View
        style={{
          ...styles.box,
          transform: [{ translateY: ourDecayAnimation }],
        }}
      ></Animated.View>
      <Animated.View
        style={{ ...styles.box, backgroundColor: "green", opacity: ourTimingAnimation }}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default AnimatedExemple;
