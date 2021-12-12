import React from "react";
import { View, Text, Image } from "react-native";
import { Article } from "../../../../api/article/articleType";
import styles from "./styles";
interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem(props: ArticleItemProps) {
  const { article } = props;

  return (
    <View style={styles.articleContainer}>
      <Image
        style={styles.articleImage}
        source={{
          uri: article.image,
        }}
      />
      <View style={styles.articlePriceContainer}>
        <Text style={styles.articlePriceCurrency}>RD$</Text>
        <Text style={styles.articlePriceValue}>{article.price}</Text>
      </View>
      <Text style={styles.articleDescription}>{article.description}</Text>
      <View style={styles.articleUserContainer}>
        <Image
          style={styles.articleUserImage}
          source={{ uri: article.user.profileImage }}
        />
        <Text style={styles.articleUserName}>{article.user.name}</Text>
      </View>
    </View>
  );
}
