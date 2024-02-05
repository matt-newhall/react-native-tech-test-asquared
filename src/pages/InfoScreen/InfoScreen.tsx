import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import { StackParamsList, StackRoutes } from "../../../navigator";
import { InfoField } from "../../atoms/InfoField/InfoField";
import { styles } from "./styles";

export type InfoScreenProps = NativeStackScreenProps<
  StackParamsList,
  StackRoutes.InfoScreen
>;

export const InfoScreen = ({ route }: InfoScreenProps) => {
  const drink = route.params.drink;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: drink.image_url,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{drink.name}</Text>
            <Text>{drink.abv}% vol.</Text>
            <Text>First Brewed {drink.first_brewed}</Text>
          </View>
        </View>
        <InfoField heading="Tagline" text={drink.tagline} />
        <InfoField heading="Description" text={drink.description} />
      </View>
    </View>
  );
};
