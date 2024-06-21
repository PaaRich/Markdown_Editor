//import { useContext } from "react";
import { Container } from "../Styled/DeletePopUp.styled";
//import axios from "axios";
//import { ApiValue } from "../App";
//import { Item } from "./Nav";
interface DelProps {
  toggleBg: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDel: boolean;
  name: string;
}

const DeletePopUp = ({ setToggleDel, toggleBg, toggleDel, name }: DelProps) => {
  //const value = useContext(ApiValue);

  // const handleDelete = async (id: number) => {
  //   await axios.delete(`http://localhost:3000/api/v1/markdown/${id}`);
  // };

  return (
    <Container $toggleBg={toggleBg} $toggleDel={toggleDel}>
      <div>
        <p>Delete this document?</p>
        <p>
          Are you sure you want to delete the <br /> <span>{name}</span>{" "}
          document and it's content? <br /> This action cannot be reversed
        </p>
        <button
          type="submit"
          onClick={() => {
            setToggleDel(() => false);
            //handleDelete(value.map((item: Item) => item.id));
          }}
        >
          Confirm & Delete
        </button>
      </div>
    </Container>
  );
};

export default DeletePopUp;
