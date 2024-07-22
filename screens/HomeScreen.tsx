import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenHeader from "../components/home/HomeScreenHeader";
import HomeScreenProductCard from "../components/home/HomeScreenProductCard";
import { CardType } from "../enums/CardType.enum";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="flex-1 bg-white dark:bg-dark-900 p-4">
        {/* Header */}
        <HomeScreenHeader />
        {/* Products */}
        <View className="flex-row justify-between items-center">
          <HomeScreenProductCard
            image={require("../assets/home/menu-board.png")}
            title="Book an Appointment"
            subTitle="Find a Doctor or specialist"
            cardType={CardType.Primary}
          />
          <HomeScreenProductCard
            image={require("../assets/home/scan.png")}
            title="Appointment with QR"
            subTitle="Queuing without the hustle"
            cardType={CardType.Success}
          />
        </View>
        <View className="flex-row justify-between items-center">
          <HomeScreenProductCard
            image={require("../assets/home/message-favorite.png")}
            title="Appointment with QR"
            subTitle="Queuing without the hustle"
            cardType={CardType.Warning}
          />
          <HomeScreenProductCard
            image={require("../assets/home/building.png")}
            title="Appointment with QR"
            subTitle="Queuing without the hustle"
            cardType={CardType.Danger}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
