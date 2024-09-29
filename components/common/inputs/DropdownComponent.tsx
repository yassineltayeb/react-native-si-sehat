import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LabelKeyValuePairs } from "../../../models/shared/label-key-value-pairs.model";
import tw from "../../../lib/tailwind";

interface DropdownInputProps {
  items: LabelKeyValuePairs[];
  search?: boolean;
  placeholder?: string;
  icon?: any;
  onValueChange: (value: any) => void;
}

const DropdownComponent: React.FC<DropdownInputProps> = ({
  items,
  search,
  icon,
  placeholder,
  onValueChange,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[
        tw`border bg-gray-50 border-gray-200 p-2 rounded-md shadow-sm`,
        isFocus && { borderColor: "blue" },
      ]}
      placeholderStyle={tw`text-base`}
      selectedTextStyle={tw`text-base`}
      inputSearchStyle={tw`h-10 text-base`}
      iconStyle={tw`w-5 h-5`}
      data={items}
      search={search}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
        onValueChange(item.value);
      }}
      renderLeftIcon={
        () =>
          icon ? (
            <AntDesign
              style={tw`mr-1`}
              color={isFocus ? "blue" : "black"}
              name={icon} // Use the passed icon value here
              size={20}
            />
          ) : null // Render nothing if icon is not passed
      }
    />
  );
};

export default DropdownComponent;