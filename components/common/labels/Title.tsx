import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface TitleProps {
  title: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  style?: any;
}

const Title: React.FC<TitleProps> = ({
  title,
  color,
  fontFamily,
  fontSize,
  style,
}) => {
  const textStyle = [
    styles.text,
    {
      color: color ?? "black",
      // fontFamily: fontFamily ?? FONTFAMILY.poppins_medium,
      fontSize: fontSize ?? 14,
      lineHeight: (fontSize ?? 14) * 1.4, // Dynamic lineHeight based on fontSize
    },
    style,
  ];

  return (
    <View style={styles.container}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    lineHeight: 30,
  },
});

export default Title;
