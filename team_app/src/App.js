import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MemberList from './containers/MemberList';
import MemberDetail from './containers/MemberDetail';


function App() {
  return (
    <div className="App">
    
    <Router>
    <h1>Team</h1>
   
    <Routes>
     <Route exact path='/'  element={<MemberList/>}/>
      <Route exact path='/member/:memberId' element={<MemberDetail/>}/>
     </Routes>
   
    
    </Router>
    </div>
  );
}

export default App;
