import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  removeToBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
const STATIC_IMAGE =
  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg";
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemToBasket = () => {
    if (!items?.length > 0) return;
    dispatch(removeToBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row ">
          <View className="flex-1 pr-2 ">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4 "
              source={{ uri: image ? urlFor(image).url() : STATIC_IMAGE }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-4 pb-3">
            <TouchableOpacity
              disabled={!items?.length}
              onPress={removeItemToBasket}
            >
              <MinusCircleIcon
                color={items?.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
