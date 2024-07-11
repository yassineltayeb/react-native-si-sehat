import { View } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";
import Button from "../buttons/Button";
import TermsAndCondition from "./TermsAndCondition";

const TermsAndConditionWithButton = () => {
  return (
    <View>
      <Button text="Continue" type={ButtonType.Primary} onClick={() => {}} />
      <TermsAndCondition />
    </View>
  );
};

export default TermsAndConditionWithButton;
