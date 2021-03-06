import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import CreateAccount from './Component/CreateAccount/CreateAccount';
import ApartmentDetails from './Component/ApartmentDetails/ApartmentDetails';
import { createContext, useState } from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import AddRentHouse from './Component/AddRentHouse/AddRentHouse';
import BookingList from './Component/BookingList/BookingList';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

// export data
export const userContext = createContext();
export const userData = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [apartmentDetails, setApartmentDetails] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <userData.Provider value={[apartmentDetails, setApartmentDetails]}>
        <Router>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <PrivateRoute path="/details">
            <ApartmentDetails />
          </PrivateRoute>
          <PrivateRoute  exact path="/AddRentHouse">
            <Sidebar />
          </PrivateRoute>
          <PrivateRoute  exact path="/myRent">
            <AddRentHouse />
          </PrivateRoute>
          <PrivateRoute exact path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Router>
      </userData.Provider>
    </userContext.Provider>
  );
}

export default App;
