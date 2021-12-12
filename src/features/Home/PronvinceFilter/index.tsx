import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { CorotosLightBlue } from "../../../_core/colors";
import styles from "./styles";
interface ProvinceFilterProps {}

export default function ProvinceFilter(props: ProvinceFilterProps) {
  return (
    <View style={styles.provinceFilterContainer}>
      <FontAwesome5 name="map-marker" size={24} color={CorotosLightBlue} />
      <View style={styles.provinceFilterInfoContainer}>
        <Text style={styles.provinceFilterInfoText}>
          En toda la República Dominicana{" "}
        </Text>
        <Text style={styles.provinceFilterInfoArticle}>99,200 artículos </Text>
      </View>
    </View>
  );
}
