import { ChevronRightIcon } from "@radix-ui/react-icons";
import "./menubar.css";

import { 
  Root, 
  Menu, 
  Trigger, 
  Portal, 
  Content, 
  Item, 
  Separator,
  Sub,
  SubTrigger,
  SubContent
} from "@radix-ui/react-menubar";

export default function Menubar() {
  return (
    <Root>
      <Menu>
        <Trigger>File</Trigger>
        <Portal>
          <Content>
            <Item>
              New Tab <div>⌘ T</div>
            </Item>
            <Item>
              New Window <div>⌘ N</div>
            </Item>
            <Item disabled>
              New Incognito Window
            </Item>
            <Separator />
            <Sub>
              <SubTrigger>
                Share <div><ChevronRightIcon /></div>
              </SubTrigger>
              <Portal>
                <SubContent alignOffset={-5}>
                  <Item>Email Link</Item>
                  <Item>Messages</Item>
                  <Item>Notes</Item>
                </SubContent>
              </Portal>
            </Sub>
            <Separator />
            <Item>
              Print… <div>⌘ P</div>
            </Item>
          </Content>
        </Portal>
      </Menu>

      <Menu></Menu>

      <Menu></Menu>

      <Menu></Menu>
    </Root>
  );
}