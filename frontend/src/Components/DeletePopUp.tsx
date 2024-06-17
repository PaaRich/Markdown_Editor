import { Container } from "../Styled/DeletePopUp.styled";
interface DelProps {
  toggleBg: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDel: boolean;
}
const DeletePopUp = ({ setToggleDel, toggleBg, toggleDel }: DelProps) => {
  return (
    <Container $toggleBg={toggleBg} $toggleDel={toggleDel}>
      <div>
        <p>Delete this document?</p>
        <p>
          Are you sure you want to delete the <br /> Welcome.md document and
          it's content? <br /> This action cannot be reversed
        </p>
        <button type="submit" onClick={() => setToggleDel(() => false)}>
          Confirm & Delete
        </button>
      </div>
    </Container>
  );
};

export default DeletePopUp;
