import "./dropdown-menu.css";

import { Root, Trigger } from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function DropdownMenu() {
  return (
    <Root>
      <Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </Trigger>
    </Root>
  );
}