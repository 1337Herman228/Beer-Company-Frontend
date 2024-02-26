import {useSelector } from 'react-redux';


import './App.css';
import NavScrollExample from '../navbar/Navbar';
import Snowfall from '../snow/FallingSnow';
import MainPage from '../mainPage/MainPage';
import AdminNavbar from '../adminNavbar/AdminNavbar';
import RolesPage from '../adminPages/RolesPage';
import AddNewRolePage from '../adminPages/AddNewRolePage';

import {Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const { isSnow } = useSelector(state => state.basic);

  return (
    <>
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Snowfall className="snow" isSnow={isSnow}/>
            <div className="App-header">

              {/* <NavScrollExample /> */}
              <AdminNavbar/>

              <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/roles" element={<RolesPage/>}/>
                <Route path="/add-new-role" element={<AddNewRolePage/>}/>
                {/* <Route path="/comics" element={<ComicsPage/>}/> */}
                {/* <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                <Route path="/char/:charId" element={<SingleCharPage/>}/> */}
                {/* <Route path="*" element={<Page404/>}/> */}
              </Routes>

            </div>
        </Suspense>
      </Router>
    </>

    
  );
}
export default App;
