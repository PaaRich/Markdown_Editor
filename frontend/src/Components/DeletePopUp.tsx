import { useContext } from "react";
import React from "react";
import { Container, CloseBtn } from "../Styled/DeletePopUp.styled";
import axios from "axios";
import { CONTEXT_VALUE } from "../store/Context";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
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
  //CONTEXT OBJECT
  const VALUE = useContext(CONTEXT_VALUE);
  const setIsSubmitted = VALUE?.setIsSubmitted;
  const setIsLoading = VALUE?.setIsLoading;
  const setIsUpdate = VALUE?.setIsUpdate;
  const id = VALUE.id;

  //Delete request
  const deleteDoc = () => {
    axios
      .delete(`https://markdowneditor1.onrender.com/api/v1/markdown/${id}`)
      .then(() => {
        toast.success("Document deleted");
        setName("Untitled.md");
        setMarkdown(" ");
        setIsSubmitted(true);
        setIsUpdate(false);
      })
      .catch((err) => console.log(err));
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
            setToggleDel(false);
            VALUE?.reSet();
            deleteDoc();
            setIsLoading(true);
          }}
        >
          Confirm & Delete
        </button>
      </div>
    </Container>
  );
};

export default DeletePopUp;
