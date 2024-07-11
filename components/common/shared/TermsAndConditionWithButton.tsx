import { View } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";
import Button from "../buttons/Button";
import TermsAndCondition from "./TermsAndCondition";

interface TermsAndConditionWithButtonProps {
  buttonDisabled?: boolean;
  onClick: any;
}

const TermsAndConditionWithButton: React.FC<
  TermsAndConditionWithButtonProps
> = ({ buttonDisabled, onClick }) => {
  return (
    <View>
      <Button
        text="Continue"
        type={ButtonType.Primary}
        onClick={onClick}
        disabled={buttonDisabled}
      />
      <TermsAndCondition />
    </View>
  );
};

export default TermsAndConditionWithButton;
