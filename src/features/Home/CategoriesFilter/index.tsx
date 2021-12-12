import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import styles from "./styles";
interface CategoriesFilterProps {}

const DATA = [
  {
    id: 1,
    title: "Inmuebles en alquiler",
  },
  {
    id: 2,
    title: "Inmuebles en venta",
  },
  {
    id: 3,
    title: "Inmuebles en alquiler",
  },
  {
    id: 4,
    title: "Inmuebles en venta",
  },
];
export default function CategoriesFilter(props: CategoriesFilterProps) {
  const renderItem = ({ item }: { item: { title: string } }) => (
    <CategoryItem title={item.title} />
  );

  return (
    <View style={styles.categoryFilterContainer}>
      <Text style={styles.categoryTitle}>Categorías</Text>

      <View style={styles.categoryListContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
