import { KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

interface KeyboardAvoidingProps {
  children: React.ReactNode;
}

const KeyboardAvoiding: React.FC<KeyboardAvoidingProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;
