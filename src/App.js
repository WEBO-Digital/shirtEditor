import React from "react";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Toolbar } from "polotno/toolbar/toolbar";
import { Workspace } from "polotno/canvas/workspace";
import { SidePanel } from "polotno/side-panel";
import { createStore } from "polotno/model/store";

import { Preview } from "./preview";

const store = createStore({
  key: "cz84qKALBWXMMQXgVuae", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

window.store = store;

store.setSize(300, 460);

store.addPage();

function App() {
  return (
    <PolotnoContainer className="polotno-app-container">
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <Preview store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
}

export default App;
