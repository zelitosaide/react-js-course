// import "./App.css";
// import { useState, useTransition } from "react";

import Notion from "./components/notion/notion";

// import DropdownMenu from "./components/dropdown-menu/dropdown-menu";

// import Submenu from "./components/submenus/submenu";

// import Popover from "./components/popover/popover";
// import Accordion from "./components/accordion/accordion";
// import Menubar from "./components/menubar/menubar";
// import Navmenu from "./components/navigation-menu/navmenu";

function App() {
  // const [isPending, startTransition] = useTransition();
  // const [tab, setTab] = useState("about");

  // function selectTab(nextTab) {
  //   startTransition(function() {
  //     setTab(nextTab);
  //   });
  // }

  return (
    <>
      {/* <Popover trigger="More info" content="Some more info..." /> */}
      {/* <Accordion /> */}
      {/* <Menubar /> */}
      {/* <Navmenu /> */}
      {/* <h1>Heading 1</h1> */}
      {/* <Submenu /> */}
      {/* <DropdownMenu /> */}
      <Notion></Notion>
    </>
  );
}

export default App;
