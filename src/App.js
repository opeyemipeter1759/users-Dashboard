import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import UserPage from './components/users/users.component'
library.add(fab, faSearch, faCoffee)

function App() {
  return (
    <div className="App">
     <UserPage/>
    </div>
  );
}

export default App;
