import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Modal from './components/Modal';
import { StyledDiv } from './components/StyledDiv';

function App() {
  return (
    <StyledDiv>
      <Home />
      <Sidebar />
      <Modal />
    </StyledDiv>
  );
}

export default App;
