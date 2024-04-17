import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ListFavorites } from "../../@types/List";
import * as C from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardFavorites = ({
  id,
  name,
  repoName,
  avatar,
  description,
  language,
  stars,
  url,
  data,
}: ListFavorites) => {
  const navigation = useNavigation();

  return (
    <C.CardContainer key={id}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { from: "Favorites", item: data });
        }}
      >
        <C.CardContent>
          <C.CardHeader>
            <C.CardFullName>
              <Text>{name}/</Text>
              <C.RepoName>{repoName}</C.RepoName>
            </C.CardFullName>
            <C.Image source={{ uri: avatar }} />
          </C.CardHeader>
          <C.Line />
          <C.Description>
            {description ? description : "Sem descrição"}
          </C.Description>
          <C.CardStar>
            <C.CadStatus>
              <MaterialCommunityIcons name="star" color={"#FFD02C"} size={20} />
              <Text>{stars ? stars : 0}</Text>
            </C.CadStatus>
            <C.CadStatus>
              <MaterialCommunityIcons
                name="circle"
                color={"#F22828"}
                size={8}
              />
              <Text>{language ? language : "Nenhuma"}</Text>
            </C.CadStatus>
          </C.CardStar>
        </C.CardContent>
      </TouchableOpacity>
    </C.CardContainer>
  );
};

export default CardFavorites;
