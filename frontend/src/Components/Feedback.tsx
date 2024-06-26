import { FeedbackContainer } from "../Styled/Container.styled";
//import { FaRegCheckCircle } from "react-icons/fa";
interface Props {
  text: string;
  icon: React.ReactElement;
}
const Feedback = ({ text, icon }: Props) => {
  return (
    <FeedbackContainer>
      <div>
        {/* <FaRegCheckCircle color="green" size={24} /> */}
        {/* <p>Saved successfully</p> */}
        {icon}
        <p>{text}</p>
      </div>
    </FeedbackContainer>
  );
};

export default Feedback;
