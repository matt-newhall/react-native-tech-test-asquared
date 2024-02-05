import { Text, View } from "react-native";
import { styles } from "./styles";

type InfoFieldProps = {
  heading: string;
  text: string;
};

export const InfoField = ({ heading, text }: InfoFieldProps) => (
  <View style={styles.infoField}>
    <View style={styles.headingSection}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);
