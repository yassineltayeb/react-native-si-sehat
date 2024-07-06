import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../labels/Title";

interface ButtonProps {
  text: string;
  buttonStyle?: any;
  textStyle?: any;
  onPress?: any;
  padding?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonStyle,
  textStyle,
  onPress,
}) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setOpacity(0.5)}
      onPressOut={() => setOpacity(1)}
      style={{ opacity }}
    >
      <View style={[styles.container, buttonStyle]}>
        <Title
          title={text}
          //   color={COLORS.primaryWhiteHex}
          //   fontFamily={FONTFAMILY.poppins_bold}
          //   fontSize={FONTSIZE.size_16}
          style={[styles.text]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.primaryOrangeHex,
  },
  text: {
    // color: COLORS.primaryWhiteHex,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
