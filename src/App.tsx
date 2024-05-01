import React, { useState } from "react";

import "./App.css";
import CustomSnackbar from "./components/CustomSnackbar";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("testing");

  const handleClose = () => {
    setOpen(false);
  };

  const handleBtn = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <button onClick={handleBtn}>Open</button>
      <CustomSnackbar open={open} handleClose={handleClose} msg={msg} />
    </div>
  );
}

export default App;
