import "./dropdown-menu.css";

import { 
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Sub,
  SubTrigger
} from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function DropdownMenu() {
  return (
    <Root>
      <Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </Trigger>

      <Portal>
        <Content className="DropdownMenuContent" sideOffset={5}>
          <Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </Item>
          <Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </Item>
          <Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </Item>
          <Sub>
            <SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </SubTrigger>
          </Sub>
        </Content>
      </Portal>
    </Root>
  );
}