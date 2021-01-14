import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faCaretDown, faToggleOn, faEnvelope,faPhone, faPhoneAlt,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes.js'

import './App.css';
import ParentComponent from './components/parentComponent/parentComponent';
import UserPage from './components/users/users.component'
import DetailsPage from './components/detailsPage/detailsPage.component';
library.add(fab, faSearch, faCaretDown, faToggleOn, faEnvelope,faPhone,faPhoneAlt,faArrowRight)

function App() {
  return (
    <div className="App">
    <Router>
      <ParentComponent>
        <div className="col-md-5 ml-5 pl-5">
        <UserPage/>
      </div>
      <div className="col-md-5">
        <DetailsPage/>
      </div>
      </ParentComponent>
    </Router>
    </div>
  );
}

export default App;
