import GlobalStyle from "../style/GlobalStyle";
import Modal from "./common/modal/Modal";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Modal>
        <h1>Это модалка</h1>
      </Modal>
      <div>app</div>
    </>
  );
};

export default App;
