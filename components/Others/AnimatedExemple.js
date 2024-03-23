import React, { useEffect, useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

function AnimatedExemple() {
  // Decay Animation
  const ourDecayAnimation = useRef(new Animated.Value(0)).current;
  const handleDecayAnimation = () => {
    Animated.decay(ourDecayAnimation, {
      velocity: 0.1,
      deceleration: 0.997,
      useNativeDriver: true,
    }).start();
  };

  // Spring Animation
  const ourSpringAnimation = useRef(new Animated.Value(0)).current;
  const handleSpringAnimation = () => {
    Animated.spring(ourSpringAnimation, {
      toValue: 100,
      friction: 0,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleSpringLeftAnimation = () => {
    Animated.spring(ourSpringAnimation, {
      toValue: 0,
      friction: 9,
      tension: 90,
      useNativeDriver: true,
    }).start();
  };

  // Timing Animation
  const ourTimingAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(ourTimingAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }, [ourTimingAnimation]);

  // Sequence && Parallel
  const SequenceOpacity = useRef(new Animated.Value(0)).current;
  const SequenceTranslateX = useRef(new Animated.Value(0)).current;
  const SequenceTranslateY = useRef(new Animated.Value(0)).current;
  const handleSequenceAnimation = () => {
    Animated.sequence([
      Animated.timing(SequenceOpacity, {
        toValue: 0.5,
        duration: 1000,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateX, {
        toValue: 100,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateY, {
        toValue: 100,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.timing(SequenceOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateX, {
        toValue: 0,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateY, {
        toValue: 0,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleParallelAnimation = () => {
    Animated.stagger(2000, [
      Animated.timing(SequenceOpacity, {
        toValue: 0.5,
        duration: 1000,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateX, {
        toValue: 100,
        friction: 0,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateY, {
        toValue: 100,
        friction: 0,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.timing(SequenceOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateX, {
        toValue: 0,
        friction: 0,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.spring(SequenceTranslateY, {
        toValue: 0,
        friction: 0,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Loop Animation
  const ourRotateLoop = useRef(new Animated.Value(0)).current;
  const handleLoopAnimation = () => {
    Animated.loop(
      Animated.timing(ourRotateLoop, {
        toValue: 360,
        duration: 1000,
        useNativeDriver: true,
      }),
      { iterations: 5 }
    ).start();
  };

  return (
    <View>
      <Button onPress={handleDecayAnimation} title="Bottom" />
      <Button onPress={handleSpringAnimation} title="Right" />
      <Button onPress={handleSpringLeftAnimation} title="Left" />
      <Button onPress={handleSequenceAnimation} title="Sequence" />
      <Button onPress={handleParallelAnimation} title="Parallel" />
      <Button onPress={handleLoopAnimation} title="Loop" />
      <Animated.View
        style={{
          ...styles.box,
          transform: [
            { translateY: ourDecayAnimation },
            { translateX: ourSpringAnimation },
          ],
        }}
      >
        <Text>Decay && Spring</Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.box,
          backgroundColor: "green",
          opacity: ourTimingAnimation,
          transform: [
            {
              rotate: ourRotateLoop.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      >
        <Text>Timing && loop</Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.box,
          backgroundColor: "gray",
          opacity: SequenceOpacity,
          transform: [
            { translateX: SequenceTranslateX },
            { translateY: SequenceTranslateY },
          ],
        }}
      >
        <Text>Sequence && Parallel</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedExemple;
