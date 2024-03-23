import React from "react";
import { Image, PixelRatio, Text, View } from "react-native";
import image from "./../../assets/favicon.png";

function PixelRatioExemple() {
  console.log(PixelRatio.get());
  const ImageSize = PixelRatio.getPixelSizeForLayoutSize(100);

  console.log(ImageSize);

  const baseFont=16;
  const fontScale = PixelRatio.getFontScale();
  const fontSize = baseFont * fontScale

  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 30 }}>
      <Text style={{fontSize:fontSize}}>PixelRatioExemple</Text>
      <Image source={image} style={{ width: ImageSize, height: ImageSize }} />
    </View>
  );
}

export default PixelRatioExemple;
