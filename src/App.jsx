import Header from './components/Header'

import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Manisha Saini"
    }
    setUserName(data.name)
  }, [])


  return (
    <Provider store={store}>
      
      <UserContext.Provider value={{ loggedInUser: userName }} >
        <div className="app">
          <Header></Header>
          <UserContext.Provider value={{ loggedInUser: "Elun musk" }}>
            <Outlet></Outlet>
          </UserContext.Provider >
        </div>
      </UserContext.Provider>

    </Provider>

    // <Provider store={store}>
    //   {console.log(store)}

    //   <div className="app">
    //     <Header></Header>
    //     <UserContext.Provider value={{ loggedInUser: "Elun musk" }}>
    //       <Outlet></Outlet>
    //     </UserContext.Provider >
    //   </div>


    // </Provider>
  );
}

export default App;

