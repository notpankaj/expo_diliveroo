import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";
const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == 'featured' && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
                type->{
                name
              }
              }
          }[0]
        `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>

      <Text className="text-gray-500 px-4 text-xs ">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant) => {
          return (
            <ResturantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant?.image}
              title={restaurant?.name}
              rating={restaurant?.rating}
              genre={restaurant?.type?.name}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes}
              long={restaurant?.long}
              lat={restaurant?.lat}
            />
          );
        })}
        {/* <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        />
        <ResturantCard
          id={"123"}
          imgUrl={
            "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main st"}
          short_description={"this is a short discription"}
          dishes={[]}
          long={11232143123}
          lat={1123112312}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
