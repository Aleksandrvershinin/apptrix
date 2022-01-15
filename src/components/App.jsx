import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { myCreateStore } from "../redux/myCreateStore";
import { Auth } from "./Auth";
import { Main } from "./Main";

const store = myCreateStore()
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Provider>
  );
}

export default App;
