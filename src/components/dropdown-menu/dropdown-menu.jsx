import "./dropdown-menu.css";

import { 
  Root,
  Trigger,
  Portal,
  Content,
  Item
} from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function DropdownMenu() {
  return (
    <Root>
      <Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </Trigger>

      <Portal>
        <Content className="DropdownMenuContent">
          <Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </Item>
          <Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </Item>
          <Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </Item>
        </Content>
      </Portal>
    </Root>
  );
}