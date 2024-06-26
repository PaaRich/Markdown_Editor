import { useContext } from "react";
import React from "react";
import { Container, CloseBtn } from "../Styled/DeletePopUp.styled";
import axios from "axios";
import { CONTEXT_VALUE } from "../store/AppContext";
import { IoClose } from "react-icons/io5";
//import { Item } from "./Nav";
interface DelProps {
  toggleBg: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDel: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const DeletePopUp = ({
  setToggleDel,
  toggleBg,
  toggleDel,
  name,
  setName,
  setMarkdown,
}: DelProps) => {
  const VALUE = useContext(CONTEXT_VALUE);
  const setIsSubmitted = VALUE?.setIsSubmitted;
  const deleteDoc = () => {
    axios.delete(`http://localhost:3000/api/v1/markdown/${name}`).then(() => {
      setName("Untitled.md");
      setMarkdown(" ");
      setIsSubmitted(true);
    });
  };

  return (
    <Container $toggleBg={toggleBg} $toggleDel={toggleDel}>
      <div>
        <CloseBtn
          $toggleBg={toggleBg}
          onClick={() => setToggleDel(() => false)}
        >
          <IoClose size={28} />
        </CloseBtn>
        <p>Delete this document?</p>
        <p>
          Are you sure you want to delete the <br /> <span>{name}</span>{" "}
          document and it's content? <br /> This action cannot be reversed
        </p>
        <button
          type="submit"
          onClick={() => {
            setToggleDel(() => false);
            VALUE?.reSet();
            deleteDoc();
          }}
        >
          Confirm & Delete
        </button>
      </div>
    </Container>
  );
};

export default DeletePopUp;
