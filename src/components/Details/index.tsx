import { Linking, Text, TouchableOpacity, View } from "react-native";

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
      <C.ButtonContainer>
        <TouchableOpacity onPress={() => openLink(url)}>
          <C.ShowView>
            <Text style={{ fontSize: 15, color: "#1976D2" }}>
              VER REPOSITÓRIO
            </Text>
            <Feather name="link-2" size={24} color="#1976D2" />
          </C.ShowView>
        </TouchableOpacity>
        {route.from == "List" ? (
          <C.FavoriteButton onPress={() => removeRepo()}>
            <C.TextButton>FAVORITAR</C.TextButton>
            <MaterialCommunityIcons name="star" color={"#000000"} size={20} />
          </C.FavoriteButton>
        ) : (
          <C.UnfavoriteButton onPress={() => removeRepo()}>
            <C.TextButton>DESFAVORITAR</C.TextButton>
            <Feather name="star" size={24} color="#000000" />
          </C.UnfavoriteButton>
        )}
      </C.ButtonContainer>
    </C.Container>
  );
}
