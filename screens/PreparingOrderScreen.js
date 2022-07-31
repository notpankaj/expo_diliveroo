import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const ANIMATED_IMAGE = require("../assets/orderLoading-01.gif");

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={ANIMATED_IMAGE}
        animation={"slideInUp"}
        iterationCount={1}
        className="h-96 w-96"
        resizeMode="contain"
      />
      <Animatable.Text
        animation={"slideInUp"}
        iterationCount={1}
        className="text-center font-bold text-lg text-white my-10"
      >
        Waiting for Restaurant to accept Your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
