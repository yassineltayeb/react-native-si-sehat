import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { LabelKeyValuePairs } from "../../../models/shared/label-key-value-pairs.model";
import tw from "../../../lib/tailwind";

interface DropdownInputProps {
  items: LabelKeyValuePairs[];
  onValueChange: (value: any, index: number) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  items,
  onValueChange,
}) => {
  return (
    <RNPickerSelect
      style={{
        inputIOS: tw`border bg-gray-50 border-gray-200 p-2 rounded-md shadow-sm`,
        inputAndroid: tw`border border-gray-200 p-2 rounded-md shadow-sm`,
      }}
      fixAndroidTouchableBug={true}
      onValueChange={onValueChange}
      items={items}
    />
  );
};

export default DropdownInput;
