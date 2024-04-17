import React from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import useList from "../contexts/ListContext";
import { Container } from "../components/Card/styles";
import Card from "../components/Card";
import TopBar from "../components/TopBar";

export default function Home() {
  const { list, setUser, changeRepo, handleRefreshData, refreshing,navigation } = useList();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshData} />
      }
    >
      <TopBar setUser={setUser} />
      <Container>
        {list.length ? (
          list.map((i) => (
            <Card
              key={i.id}
              id={i.id}
              name={i.name}
              repoName={i.repoName}
              avatar={i.avatar}
              description={i.description}
              language={i.language}
              stars={i.stars}
              url={i.url}
              changeRepo={changeRepo}
              data={i}
              navigation={navigation}
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
