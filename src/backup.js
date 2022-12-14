// import { MyApp } from "./learn/quick_start/MyApp";
import { Index as ReactAPIIndex } from "./api/memo/react-api";
import { WrapsOtherComponents } from "./api/memo/react-api/wraps-other-components";
import { Index as W3SchoolsIndex } from "./api/memo/w3schools";
import { AutomaticallyNestedHeadings } from "./api/use-context/automatically-nested-headings";
import { ExtractingProviderToComponent } from "./api/use-context/extracting-providers-to-a-component.";
import { MultipleContexts } from "./api/use-context/multiple-contexts";
import { OverridingThemeExample } from "./api/use-context/overriding-a-theme-example";
import { PassingData } from "./api/use-context/passing-data-deeply-into-the-tree";
import { SpecifyingFallbackDefaultValue } from "./api/use-context/specifying-a-fallback-default-value";
import { SpecifyingFallbackDefaultValueExample } from "./api/use-context/specifying-a-fallback-default-value-example";
import { UpadatingValueViaContext } from "./api/use-context/updating-a-value-via-context";
import { UpdatingObjectViaContext } from "./api/use-context/updating-an-object-via-context";
import { UpdatingData } from "./api/use-context/updating-data-passed-via-context";
import { FilterableProductTable } from "./learn/thinking_in_react/FilterableProductTable";

import { PRODUCTS as products } from "./learn/thinking_in_react/products";

// New Start
import QuickStart, {
  AboutPage,
  AddingStyles,
  DisplayingData,
} from "./learn/get-started/quick-start";

function App() {
  return (
    // <MyApp />
    // <FilterableProductTable products={products} />
    // <PassingData />
    // <UpdatingData />
    // <UpadatingValueViaContext />
    // <UpdatingObjectViaContext />
    // <MultipleContexts />
    // <ExtractingProviderToComponent />
    // <SpecifyingFallbackDefaultValue />
    // <SpecifyingFallbackDefaultValueExample />
    // <OverridingThemeExample />
    // <AutomaticallyNestedHeadings />

    // <W3SchoolsIndex />
    // <ReactAPIIndex />
    // <WrapsOtherComponents />

    // New Start
    <>
      <QuickStart />
      <AboutPage />
      <AddingStyles />
      <DisplayingData />
    </>
  );
}

export default App;
