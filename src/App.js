import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import ParentComponent from './components/parentComponent/parentComponent';
import UserPage from './components/users/users.component'
library.add(fab, faSearch)

function App() {
  return (
    <div className="App">
     <ParentComponent/>
     {/* <UserPage/> */}

    </div>
  );
}

export default App;
