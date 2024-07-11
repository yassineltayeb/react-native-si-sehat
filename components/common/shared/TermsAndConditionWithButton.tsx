import { View } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";
import Button from "../buttons/Button";
import TermsAndCondition from "./TermsAndCondition";

interface TermsAndConditionWithButtonProps {
  onClick: any;
}

const TermsAndConditionWithButton: React.FC<
  TermsAndConditionWithButtonProps
> = ({ onClick }) => {
  return (
    <View>
      <Button text="Continue" type={ButtonType.Primary} onClick={onClick} />
      <TermsAndCondition />
    </View>
  );
};

export default TermsAndConditionWithButton;
