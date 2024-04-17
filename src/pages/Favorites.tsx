import React from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import useList from "../contexts/ListContext";
import { Container } from "../components/Card/styles";
import CardFavorites from "../components/CardFavorites";
import TopBar from "../components/TopBar";

export default function Favorites() {
  const { localList, setUser, refreshing, handleRefreshStorage } = useList();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefreshStorage}
        />
      }
    >
      <TopBar setUser={setUser} />
      <Container>
        {localList.length ? (
          localList.map((i) => (
            <CardFavorites
              key={i.id}
              id={i.id}
              name={i.name}
              repoName={i.repoName}
              avatar={i.avatar}
              description={i.description}
              language={i.language}
              stars={i.stars}
              url={i.url}
              data={i}
            />
          ))
        ) : (
          <>
            <Text>Não encontrado</Text>
          </>
        )}
      </Container>
    </ScrollView>
  );
}
