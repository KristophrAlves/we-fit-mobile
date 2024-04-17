import styled from "styled-components/native";

export const Container = styled.View`
  gap: 16px;
  border-radius: 4px;
  padding-vertical: 16px;
  padding-horizontal: 16px;
  background-color: #f6f6f5;
`;

export const CardContainer = styled.View`
  padding-vertical: 12px;
  padding-horizontal: 16px;
  background-color: #ffffff;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 10px;
`;

export const CardContent = styled.View`
  padding-top: 12px;
  gap: 16px;
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardFullName = styled.View`
  flex-direction: row;
`;

export const RepoName = styled.Text`
  font-weight: 700;
`;

export const Image = styled.Image`
  width: 29px;
  height: 29px;
  border-radius: 50px;
`;

export const Line = styled.View`
  border-bottom-color: #dadada;
  border-bottom-width: 1px;
  opacity: 0.9;
`;

export const Description = styled.Text`
  color: #9a9a9a;
  line-height: 14.52px;
`;

export const CardStar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #faf3dc;
  padding-horizontal: 8px;
  padding-vertical: 10px;
  border-radius: 4px;
  gap: 10px;
`;

export const CadStatus = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
