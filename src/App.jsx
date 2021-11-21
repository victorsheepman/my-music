import React from "react";

import { Layout } from "./container/Layout";
import { AppContext } from "./context/AppContext";
import {useSearch} from "./hooks/useSearch";
function App() {
  const initial=useSearch();
  return (
    <>
    <AppContext.Provider value={initial}>
      <Layout />
    </AppContext.Provider>
    </>
  );
}

export default App;
