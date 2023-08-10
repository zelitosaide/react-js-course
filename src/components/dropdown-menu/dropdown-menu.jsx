import "./dropdown-menu.css";

import { 
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Sub,
  SubTrigger,
  SubContent,
  Separator,
  CheckboxItem,
  ItemIndicator,
  Label
} from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function DropdownMenu() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);

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
            <Portal>
              <SubContent 
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </Item>
                <Item className="DropdownMenuItem">Create Shortcut…</Item>
                <Item className="DropdownMenuItem">Name Window…</Item>
                <Separator className="DropdownMenuSeparator" />
                <Item className="DropdownMenuItem">Developer Tools</Item>
              </SubContent>
            </Portal>
          </Sub>

          <Separator className="DropdownMenuSeparator" />

          <CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </CheckboxItem>

          <CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </ItemIndicator>
            Show Full URLs
          </CheckboxItem>

          <Separator className="DropdownMenuSeparator" />

          <Label className="DropdownMenuLabel">People</Label>
        </Content>
      </Portal>
    </Root>
  );
}