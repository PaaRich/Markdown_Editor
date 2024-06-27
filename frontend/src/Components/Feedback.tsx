import { FeedbackContainer } from "../Styled/Container.styled";
interface Props {
  text: string;
  icon: React.ReactElement;
}
const Feedback = ({ text, icon }: Props) => {
  return (
    <FeedbackContainer>
      <div>
        {icon}
        <p>{text}</p>
      </div>
    </FeedbackContainer>
  );
};

export default Feedback;
