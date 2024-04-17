import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #ffffff;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
`;

export const BoxLine = styled.View`
  width: 100%;
  align-items: center;
  padding: 12px;
`;

export const Line = styled.View`
  width: 30px;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 6px;
  border-radius: 12px;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  background-color: #1976d2;
`;
