// import "./App.css";
import * as Popover from "@radix-ui/react-popover";

function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger>More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          Some more info...
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

function App() {
  return (
    <>
      <PopoverDemo />
    </>
  )
}

export default App;
