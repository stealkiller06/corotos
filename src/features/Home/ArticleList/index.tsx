import React from "react";
import { View, Text, FlatList } from "react-native";
import { Article } from "../../../api/article/articleType";
import ArticleItem from "./ArticleItem";
import styles from "./styles";

interface ArticleListProps {}

const ARTICLES: Article[] = [
  {
    id: "1",
    name: "Car",
    description: "This is a beautiful car",
    price: 200,
    image:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    user: {
      name: "Frank ",
      profileImage:
        "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    },
  },
  {
    id: "2",
    name: "Car",
    description: "This is a beautiful car",
    price: 200,
    image:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    user: {
      name: "Frank ",
      profileImage:
        "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    },
  },
  {
    id: "3",
    name: "Car",
    description: "This is a beautiful car",
    price: 200,
    image:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    user: {
      name: "Frank ",
      profileImage:
        "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    },
  },
  {
    id: "4",
    name: "Car",
    description: "This is a beautiful car",
    price: 200,
    image:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    user: {
      name: "Frank ",
      profileImage:
        "https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg",
    },
  },
];
export default function ArticleList(props: ArticleListProps) {
  const renderItem = ({ item }: { item: Article }) => (
    <ArticleItem article={item} />
  );
  return (
    <View style={styles.articleListContainer}>
      <Text style={styles.articleListTitle}>Todas las categorías</Text>

      <FlatList
        data={ARTICLES}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
