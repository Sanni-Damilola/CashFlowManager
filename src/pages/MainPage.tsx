import { Buttons } from "../Buttons";

const MainPage = () => {
  return (
    <div className="main_page">
      <b>Hi 👋🏻</b>
      <div>
        <Buttons route="/withdrawal" text="w" />
        <Buttons route="/deposit" text="d" />
      </div>
    </div>
  );
};

export default MainPage;
