import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const staticImage =
  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    >
      {/* <CategoryCard
        imgUrl="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg"
        title="Testing"
      /> */}
      {categories?.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={
              categories.image
                ? urlFor(categories.image).width(200).url()
                : staticImage
            }
            title={category?.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
