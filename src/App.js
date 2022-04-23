import logo from './logo.svg';
import './App.scss';
import Main from './Main/Main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Payment from './Home/payment/Payment';
import NotFound from './NotFound/NotFound';
import BankPay from './Home/payment/BankPay';
import Login from './Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyProfile from './Home/myProfile/MyProfile';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/bankPay" element={<BankPay></BankPay>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* <Route path="/myProfile" element={<PrivateRoute Component={MyProfile} />}>

          </Route> */}
          <Route path="/myProfile" element={
            <PrivateRoute loggedInUser={loggedInUser} >
              <MyProfile  />
            </PrivateRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
