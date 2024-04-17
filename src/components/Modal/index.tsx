import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import * as C from "./styles";

const GearModal = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSave = () => {
    setUser(userName);
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <FontAwesome6 name="gear" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <C.ModalContainer>
          <C.ModalContent>
            <C.BoxLine>
              <C.Line />
            </C.BoxLine>
            <C.ModalTitle>Alterar usuário selecionado</C.ModalTitle>
            <C.Input
              placeholder="Nome do usuário"
              value={userName}
              onChangeText={setUserName}
            />
            <C.ButtonContainer>
              <C.ButtonClose onPress={() => setVisible(false)}>
                <Text style={{ color: "#1976D2", fontSize: 15 }}>CANCELAR</Text>
              </C.ButtonClose>
              <C.ButtonSave onPress={handleSave}>
                <Text style={{ color: "#FFFFFF", fontSize: 15 }}>SALVAR</Text>
              </C.ButtonSave>
            </C.ButtonContainer>
          </C.ModalContent>
        </C.ModalContainer>
      </Modal>
    </View>
  );
};

export default GearModal;
