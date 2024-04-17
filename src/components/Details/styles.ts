import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  gap: 16px;
  flex: 1;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
`;

export const TitleName = styled.Text`
  font-size: 20px;
`;

export const TitleRepoName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #9a9a9a;
`;

export const ContentLenguage = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TextLenguage = styled.Text`
  font-size: 14px;
  color: #9a9a9a;
`;
