import React from "react";
import { Text, View } from "react-native";
import { CorotosSafeAreaView } from "../../components/CorotosSafeAreaView";
import ArticleList from "./ArticleList";
import CategoriesFilter from "./CategoriesFilter";
import HomeHeader from "./HomeHeader";
import ProvinceFilter from "./PronvinceFilter";
import styles from "./styles";

export default function Home() {
  return (
    <CorotosSafeAreaView>
      <HomeHeader />
      <CategoriesFilter />
      <ProvinceFilter />
      <ArticleList />
    </CorotosSafeAreaView>
  );
}
