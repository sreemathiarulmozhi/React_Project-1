import React from 'react'
import { userContext } from './Components/Context'
import { Provider } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import router from './Route';

const App = () => {
  const [user, setuser] = useState('');
  return (
    <div>
      <userContext.Provider value = {[user, setuser]}>
         <RouterProvider router={router} />
        </userContext.Provider>

    </div>
  )
}
export default App


/*import Login from "./Components/Login";
function App() {
    return (
        <div>
          <Login></Login>
        </div>
    )
};
export default App;*/


/*import Signup from "./Components/Signup";
function App() {
    return (
        <div>
          <Signup></Signup>
        </div>
    )
};
export default App;*/


/*import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default App;*/


/*import Booking from "./Components/Booking";
const App = () => {
  return (
    <div>
      <Booking></Booking>
    </div>
  );
};
export default App;*/


/*import { Payment } from "@material-ui/icons";
const App = () => {
  return (
    <div>
      <Payment></Payment>
    </div>
  );
};
export default App;*/