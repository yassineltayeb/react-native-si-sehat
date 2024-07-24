import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenHeader from "../components/home/HomeScreenHeader";
import HomeScreenProductCard from "../components/home/HomeScreenProductCard";
import { CardType } from "../enums/CardType.enum";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import { ButtonType } from "../enums/ButtonTypes.enum";
import FilterButton from "../components/home/FilterButton";
import HomeScreenPromotions from "../components/home/HomeScreenPromotions";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="flex-1 bg-white dark:bg-dark-900 p-4">
        {/* Header */}
        <HomeScreenHeader />
        {/* Search */}
        <View className="flex flex-row justify-center items-center mt-3">
          <View className="flex-1 mr-2">
            <TextFieldInput icon="search" placeholder="symptoms, diseses..." />
          </View>
          <FilterButton
            type={ButtonType.Secondary}
            size={24}
            iconName="filter-sharp"
          />
        </View>
        {/* Products */}
        <View className="flex flex-row flex-wrap justify-between items-center -mr-3">
          <HomeScreenProductCard
            image={require("../assets/home/menu-board.png")}
            title="Book an Appointment"
            subTitle="Find a Doctor or specialist"
            cardType={CardType.Primary}
            onPress={() => {
              navigateToScreen("AppointmentBookingScreen");
            }}
          />
          <HomeScreenProductCard
            image={require("../assets/home/scan.png")}
            title="Appointment with QR"
            subTitle="Queuing without the hustle"
            cardType={CardType.Success}
          />
        </View>
        <View className="flex flex-row justify-between items-center -mr-3">
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
        {/* Promotion */}
        <View className="mt-4">
          <HomeScreenPromotions />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
