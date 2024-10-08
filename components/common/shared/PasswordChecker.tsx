import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { PasswordComplexity } from "../../../enums/PasswordComplexity.enum";

interface PasswordCheckerProps {
  password: string;
  onPasswordComplexityChange: (complexity: string) => void;
}

const PasswordChecker: React.FC<PasswordCheckerProps> = ({
  password,
  onPasswordComplexityChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [passwordComplexity, setPasswordComplexity] = useState("");

  useEffect(() => {
    const calculatePasswordComplexity = (password: string) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      let complexity = "";
      if (password.length > 0) {
        if (password.length < 6) {
          setSelectedIndex(0);
          complexity = PasswordComplexity.Weak;
        } else if (password.length < 10) {
          if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
            setSelectedIndex(2);
            complexity = PasswordComplexity.VeryStrong;
          } else {
            setSelectedIndex(1);
            complexity = PasswordComplexity.Strong;
          }
        } else {
          if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
            setSelectedIndex(2);
            complexity = PasswordComplexity.VeryStrong;
          } else {
            setSelectedIndex(1);
            complexity = PasswordComplexity.Strong;
          }
        }
      }
      setPasswordComplexity(complexity);
      onPasswordComplexityChange(complexity);
    };
    calculatePasswordComplexity(password);
  }, [password, onPasswordComplexityChange]);

  const getTextClass = () => {
    if (selectedIndex === 0) {
      return "text-red-500";
    } else if (selectedIndex === 1) {
      return "text-yellow-500";
    } else if (selectedIndex === 2) {
      return "text-green-500";
    } else {
      return "text-gray-500";
    }
  };

  const renderPasswordBars = () => {
    const bars = [];
    for (let i = 0; i < 3; i++) {
      const isSelected = i <= selectedIndex;
      let barClass = "bg-primary-500";
      if (selectedIndex === 0) {
        barClass = "bg-red-500";
      } else if (selectedIndex === 1) {
        barClass = "bg-yellow-500";
      } else if (selectedIndex === 2) {
        barClass = "bg-green-500";
      }

      bars.push(
        <View
          key={i}
          className={`w-[42.33px] h-[4px] rounded-full mr-3 ${
            isSelected ? barClass : "bg-gray-300 dark:bg-dark-600"
          }`}
        ></View>
      );
    }
    return bars;
  };

  return (
    <View className="flex-row justify-between items-center mb-2">
      <Text className={`text-sm font-medium ${getTextClass()}`}>
        {passwordComplexity}
      </Text>
      <View className="flex-row">{renderPasswordBars()}</View>
    </View>
  );
};

export default PasswordChecker;
