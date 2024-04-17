import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { List } from "../../@types/List";
import * as C from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({
  id,
  name,
  repoName,
  avatar,
  description,
  language,
  stars,
  url,
  changeRepo,
  data,
  navigation,
}: List) => {
  return (
    <C.CardContainer key={id}>
      <C.CardContent>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", { from: "List", item: data });
          }}
        >
          <C.CardHeader>
            <C.CardFullName>
              <Text>{name}/</Text>
              <C.RepoName>{repoName}</C.RepoName>
            </C.CardFullName>
            <C.Image source={{ uri: avatar }} />
          </C.CardHeader>
        </TouchableOpacity>
        <C.Line />
        <C.Description>
          {description ? description : "Sem descrição"}
        </C.Description>
        <C.CardStar>
          <C.ButtonFavorite onPress={() => changeRepo(data)}>
            <MaterialCommunityIcons name="star" color={"#FFD02C"} size={20} />
            <Text style={{ color: "#FFD02C" }}>Favoritar</Text>
          </C.ButtonFavorite>
          <C.CadStatus>
            <MaterialCommunityIcons name="star" color={"#FFD02C"} size={20} />
            <Text>{stars ? stars : 0}</Text>
          </C.CadStatus>
          <C.CadStatus>
            <MaterialCommunityIcons name="circle" color={"#F22828"} size={8} />
            <Text>{language ? language : "Nenhuma"}</Text>
          </C.CadStatus>
        </C.CardStar>
      </C.CardContent>
    </C.CardContainer>
  );
};

export default Card;
