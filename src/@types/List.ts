export interface List {
  id: number;
  name: string;
  repoName: string;
  avatar: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  changeRepo: (data: List) => void;
  data: List;
  navigation: any;
}

export interface ListFavorites {
  id: number;
  name: string;
  repoName: string;
  avatar: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  data: List;
}

export interface User {
  name: string;
}
