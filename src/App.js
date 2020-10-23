import React, { useEffect } from "react"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import SearchBar from "./components/layout/SearchBar"
import Logs from "./components/logs/Logs"
import AddBtn from "./components/layout/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechListModal"

/// FOR THE STORE PROVIDR AND STORE IS THE WHOLE STORE
import { Provider } from "react-redux"
import store from "./store"
import EditTechModal from "./components/techs/EditTechModal"

const App = () => {
  useEffect(() => {
    // INITIALISES MATERIALISE JS
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className='container'>
          <Logs />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <EditTechModal />
          <AddBtn />
        </div>
      </>
    </Provider>
  )
}

export default App
