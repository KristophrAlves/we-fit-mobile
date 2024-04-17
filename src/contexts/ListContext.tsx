import { useEffect, useState } from "react";
import { List, User } from "../@types/List";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const useList = () => {
  const [list, setList] = useState<List[]>([]);
  const [localList, setLocalList] = useState<List[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const handleRefreshData = () => {
    setRefreshing(true);
    fetchData();
  };

  const fetchData = async () => {
    const result = await api.get(`users/${user}/repos`);
    const mappedData = result.data.map((i) => ({
      id: i.id,
      name: i.owner.login,
      repoName: i.name,
      avatar: i.owner.avatar_url,
      description: i.description,
      language: i.language,
      stars: i.stargazers_count,
      url: i.html_url,
    }));
    setRefreshing(false);
    setList(mappedData);
    verifyStorage();
  };

  const handleRefreshStorage = () => {
    setRefreshing(true);
    verifyStorage();
  };

  const verifyStorage = async () => {
    const savedData = await AsyncStorage.getItem("savedData");
    if (savedData) {
      const savedDataList: List[] = JSON.parse(savedData);
      setLocalList(savedDataList);
      setList((list) =>
        list.filter(
          (item) => !savedDataList.some((savedItem) => savedItem.id === item.id)
        )
      );
      setRefreshing(false);
    } else {
      setRefreshing(false);
    }
  };

  const changeRepo = async (data: List) => {
    try {
      // Recupera os dados salvos no AsyncStorage
      const savedData = await AsyncStorage.getItem("savedData");
      let newData: List[] = savedData ? JSON.parse(savedData) : [];

      // Verifica se o item já está na lista
      const index = newData.findIndex((item) => item.id === data.id);

      if (index !== -1) {
        // Remove o item da lista se já estiver presente
        newData.splice(index, 1);
      } else {
        // Adiciona o item à lista se não estiver presente
        newData.push(data);
      }

      // Atualiza o AsyncStorage com a nova lista
      await AsyncStorage.setItem("savedData", JSON.stringify(newData));
      verifyStorage();
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  useEffect(() => {
    verifyStorage();
  }, []);

  useEffect(() => {
    fetchData();
  }, [user]);

  return {
    list,
    localList,
    setUser,
    changeRepo,
    refreshing,
    handleRefreshData,
    handleRefreshStorage,
    navigation,
  };
};

export default useList;
