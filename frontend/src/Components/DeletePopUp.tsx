import { useContext } from "react";
import React from "react";
import { Container } from "../Styled/DeletePopUp.styled";
import axios from "axios";
import { ApiValue } from "../App";
import { Item } from "./Nav";
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
  const value = useContext(ApiValue);

  const deleteDoc = () => {
    axios.delete(`http://localhost:3000/api/v1/markdown/${name}`).then(() => {
      alert(`${name} deleted`);
      setName("Untitled.me");
      setMarkdown(" ");
      // value.filter((item: Item) => {
      //   item.name === name;
      // });
      const index = value.indexOf(name);
      if (index !== -1) {
        value.splice(index, 1);
      }
    });
  };

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
