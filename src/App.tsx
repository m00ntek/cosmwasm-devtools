import React from "react";
import "./App.css";
import { AccountList } from "./features/accounts/AccountList";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { ContractList } from "./features/contracts/ContractList";
import { Console } from "./features/console/Console";
import { SlDivider } from "@shoelace-style/shoelace/dist/react";
import { Connection } from "./features/config/Connection";
import { Configuration } from "./features/config/Configuration";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.64/dist/"
);
function App() {
  return (
    <div className="main">
      <aside className="sidebar">
        <h3 className="header">cosmwasm devtools</h3>
        <SlDivider />
        <AccountList />
        <SlDivider />
        <ContractList />
        <SlDivider />
        <Connection />
      </aside>
      <section className="console">
        <Console />
      </section>
      <Configuration />
    </div>
  );
}

export default App;
