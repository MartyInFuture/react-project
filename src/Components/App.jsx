import Button from './common/button/Button';
import Header from './header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Button icon="edit" classBtn="edit" />
      <Button classBtn="add" />
    </>
  );
};

export default App;
