import { View } from "react-native";
import TopBarTab from "../components/TopBarTab";
import DetailsComponent from "../components/Details";

export default function Details({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <TopBarTab />
      <DetailsComponent route={route.params} />
    </View>
  );
}
