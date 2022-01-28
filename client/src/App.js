import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import Posts from './components/Posts';

function App() {
  return (
    <Container >
      <Header />
      <Posts />
    </Container>
  );
}

export default App;
