export * from "./component";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Component } from "./component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Component callbackFunc={() => 100} />
  </StrictMode>
);
