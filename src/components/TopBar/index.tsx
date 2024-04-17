import GearModal from "../Modal";
import * as C from "./styles";

const TopBar = ({ setUser }) => {
  return (
    <C.Container>
      <C.Title>WeFit</C.Title>
      <GearModal setUser={setUser} />
    </C.Container>
  );
};

export default TopBar;
