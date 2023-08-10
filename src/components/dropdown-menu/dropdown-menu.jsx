import { Root, Trigger } from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function DropdownMenu() {
  return (
    <Root>
      <Trigger asChild>
        <button>
          <HamburgerMenuIcon />
        </button>
      </Trigger>
    </Root>
  );
}