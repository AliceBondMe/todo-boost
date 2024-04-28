import { FC } from "react";
import peopleWorking from "../assets/images/work-productivity.png";
import { Container, HomeTextBlock } from "./Pages.styled";

const HomePage: FC = () => {
  return (
    <Container>
      <HomeTextBlock>
        <h1>Welcome to Your Todo List App!</h1>
        <p>
          Get ready to organize your tasks and boost your productivity with our
          simple and intuitive todo list app. Whether you're managing daily
          chores, planning projects, or tracking goals, our app is here to help
          you stay organized and focused.
        </p>
      </HomeTextBlock>
      <img src={peopleWorking} alt="People working on tasks" />
    </Container>
  );
};

export default HomePage;
