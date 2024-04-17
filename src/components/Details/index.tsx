import {
  Linking,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import useList from "../../contexts/ListContext";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import * as C from "./styles";

export default function DetailsComponent({ route }) {
  const { changeRepo } = useList();
  const navigation = useNavigation();
  const { name, repoName, description, language, url } = route.item;

  const openLink = (data) => {
    Linking.openURL(data);
  };

  function removeRepo() {
    changeRepo(route.item);
    navigation.goBack();
  }

  return (
    <C.Container>
      <C.ContentTitle>
        <C.TitleName>{name}/</C.TitleName>
        <C.TitleRepoName>{repoName}</C.TitleRepoName>
      </C.ContentTitle>
      <View>
        <C.Description>{description ? description : "Nenhuma"}</C.Description>
      </View>
      <C.ContentLenguage>
        <MaterialCommunityIcons name="circle" color={"#F22828"} size={12} />
        <C.TextLenguage>{language ? language : "Nenhuma"}</C.TextLenguage>
      </C.ContentLenguage>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => openLink(url)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "#1976D2",
              padding: 12,
              borderRadius: 8,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 15, color: "#1976D2" }}>
              VER REPOSITÓRIO
            </Text>
            <Feather name="link-2" size={24} color="#1976D2" />
          </View>
        </TouchableOpacity>
        {route.from == "List" ? (
          <TouchableOpacity onPress={() => removeRepo()} style={styles.button}>
            <Text style={styles.buttonText}>FAVORITAR</Text>
            <MaterialCommunityIcons name="star" color={"#000000"} size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => removeRepo()}
            style={styles.buttonUnfollow}
          >
            <Text style={styles.buttonTextUnfollow}>DESFAVORITAR</Text>
            <Feather name="star" size={24} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
    </C.Container>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#ffffff",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FFD02C",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonUnfollow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
  },
  buttonTextUnfollow: {
    color: "#000000",
    textAlign: "center",
  },
});
