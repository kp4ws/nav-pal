import { View } from "react-native";
import MapContainer from "@/components/MapContainer";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapContainer />
    </View>
  );
}
