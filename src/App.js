import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicPages from "./pages/PublicPages";
import Authpages from "./AuthPages/Authpages";
function App() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <>
      <Router>{isLogin ? <Authpages /> : <PublicPages />}</Router>
    </>
  );
}

export default App;
