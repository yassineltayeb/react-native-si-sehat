import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Promotion } from "../../models/home/promotion.model";
import HomeScreenButtonLabel from "./HomeScreenButtonLabel";

const promotions: Promotion[] = [
  {
    id: 1,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-primary-500 dark:bg-primary-400",
  },
  {
    id: 2,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-danger-500 dark:bg-danger-400",
  },
  {
    id: 3,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-warning-500 dark:bg-warning-400",
  },
];

const HomeScreenPromotions = () => {
  const PromotionCard = ({ promotion }: { promotion: Promotion }) => {
    return (
      <View
        className={`h-[104] w-[312] rounded-xl mr-3 relative overflow-hidden ${promotion.backgroundColor} `}
      >
        <Image
          className="absolute  max-h-full right-0 w-1/2 top-0 bottom-0"
          resizeMode='contain'
          source={promotion.image}
        />
        <Text className="font-manrope-bold font-bold text-sm text-white dark:text-dark pl-4 pt-4">
          {promotion.description}
        </Text>
        <HomeScreenButtonLabel text="Find out now → " />
      </View>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={promotions}
      renderItem={({ item }) => <PromotionCard promotion={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
    />
  );
};

export default HomeScreenPromotions;
