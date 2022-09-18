import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MemberList from './containers/MemberList';
import MemberDetail from './containers/MemberDetail';
import { Container } from '@mui/material';


function App() {
  return (
    <div className="App">
    
    <Router>
    <h1>Team</h1>
    <Container>
    <Routes>
     <Route exact path='/'  element={<MemberList/>}/>
      <Route exact path='/member/:memberId' element={<MemberDetail/>}/>
     </Routes>
    </Container>
    
    </Router>
    </div>
  );
}

export default App;
