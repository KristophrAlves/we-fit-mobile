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

export const ShowView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  gap: 8px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
`;

export const TextButton = styled.Text`
  color: #000000;
  text-align: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  flexDirection: "row",
  backgroundColor: "#FFD02C",
  padding: 10,
  borderRadius: 8,
  marginTop: 10,
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
`;

export const UnfavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-width: 1px;
  border-color: #000000;
`;
