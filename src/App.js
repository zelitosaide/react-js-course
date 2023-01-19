// import QuickStart, {
//   AboutPage,
//   AddingStyles,
//   CountersThatUpdateSeparately,
//   CountersThatUpdateTogether,
//   DisplayingData,
//   RespondingToEvents,
//   ShoppingList,
//   UpdatingTheScreen,
// } from "./learn/get-started/quick-start";

// import TicTacToeGame from "./learn/get-started/quick-start/tic-tac-toe";

import FilterableProductTable from "./learn/get-started/quick-start/thinking-in-react";
import { products2 as products } from "./utils/data";

function App() {
  return (
    <>
      {/* Quick Start */}
      {/* <QuickStart />
      <AboutPage />
      <AddingStyles />
      <DisplayingData />
      <ShoppingList />
      <RespondingToEvents />
      <UpdatingTheScreen />
      <CountersThatUpdateSeparately />
      <CountersThatUpdateTogether /> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToeGame /> */}

      <FilterableProductTable products={products} />
    </>
  );
}

export default App;
