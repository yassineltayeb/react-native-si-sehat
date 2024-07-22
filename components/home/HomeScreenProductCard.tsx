import { View, Text, Image } from "react-native";
import React from "react";
import { CardType } from "../../enums/CardType.enum";

interface HomeScreenProductCardProps {
  image: any;
  title: string;
  subTitle: string;
  cardType: string;
}

const HomeScreenProductCard: React.FC<HomeScreenProductCardProps> = ({
  image,
  title,
  subTitle,
  cardType,
}) => {
  let bgClassNames = ``;
  let imageBGClassNames = ``;

  if (cardType == CardType.Primary) {
    bgClassNames += "bg-primary-50 dark:bg-primary-900";
    imageBGClassNames += "bg-primary-100 dark:bg-primary-800";
  }
  if (cardType == CardType.Success) {
    bgClassNames += "bg-success-50 dark:bg-success-900";
    imageBGClassNames += "bg-success-100 dark:bg-success-800";
  }
  if (cardType == CardType.Warning) {
    bgClassNames += "bg-warning-50 dark:bg-warning-900";
    imageBGClassNames += "bg-warning-100 dark:bg-warning-800";
  }
  if (cardType == CardType.Danger) {
    bgClassNames += "bg-danger-50 dark:bg-danger-900";
    imageBGClassNames += "bg-danger-100 dark:bg-danger-800";
  }

  return (
    <View className={`flex-1 h-[174] p-3 my-3 rounded-xl ${bgClassNames}`}>
      <View className={`${imageBGClassNames}`}>
        <Image source={image} />
      </View>
      <Text className="font-manrope-bold text-base text-typography-900 dark:text-typography-50">
        {title}
      </Text>
      <Text className="font-manrope-medium text-xs text-typography-500 dark:text-typography-400 mb-5">
        {subTitle}
      </Text>
    </View>
  );
};

export default HomeScreenProductCard;
