import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Promotion } from "../../models/home/promotion.model";

const promotions: Promotion[] = [
  {
    id: 1,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-primary-500",
  },
  {
    id: 2,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-primary-900",
  },
  {
    id: 3,
    description: "Prevent the spread of COVID-19 Virus",
    image: require("../../assets/home/corona-virus.png"),
    backgroundColor: "bg-primary-900",
  },
];

const HomeScreenPromotions = () => {
  const PromotionCard = ({ promotion }: { promotion: Promotion }) => {
    return (
      <View className={`h-[104] rounded-xl mr-3 ${promotion.backgroundColor}`}>
        <Image
          className="absolute right-0 h-full w-auto"
          resizeMode="contain"
          source={promotion.image}
        />
        <Text>{promotion.description}</Text>
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
