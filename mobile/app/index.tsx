import { View, StyleSheet } from "react-native";
import MapContainer from "@/components/MapContainer";

export default function Index() {
  return (
    <View style={styles.container}>
      <MapContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }  
});