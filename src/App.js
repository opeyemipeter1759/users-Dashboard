import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import ParentComponent from './components/parentComponent/parentComponent';
library.add(fab, faSearch)

function App() {
  return (
    <div className="App">
     <ParentComponent/>
    </div>
  );
}

export default App;
