import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { myCreateStore } from "../redux/myCreateStore";
import { Auth } from "./Auth";
import { CheckAuth } from "./CheckAuth";
import { Main } from "./Main";
import { Tasks } from "./Tasks/Tasks";

const store = myCreateStore()
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<CheckAuth><Main /></CheckAuth>} />
        <Route path='/auth' element={< Auth />} />
        <Route path='/tasks' element={<CheckAuth><Tasks /></CheckAuth>} />
      </Routes>
    </Provider>
  );
}

export default App;
