import { Text, TouchableOpacity, View } from "react-native";
import * as C from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const TopBarTab = () => {
  const navigation = useNavigation();

  return (
    <C.Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            paddingHorizontal: 8,
            paddingVertical: 16,
            color: "white",
          }}
        >
          Detalhes
        </Text>
      </View>
    </C.Container>
  );
};

export default TopBarTab;
