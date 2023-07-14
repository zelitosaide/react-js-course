import "./navmenu.css";

import { 
  Root,
  Sub,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Indicator,
  Viewport
} from "@radix-ui/react-navigation-menu";

export default function Navmenu() {
  return (
    <Root>
      <List>
        <Item>
          <Trigger>Item one</Trigger>
          <Content>Item one content</Content>
        </Item>
        <Item>
          <Trigger>Item two</Trigger>
          <Content>Item Two content</Content>
        </Item>
        <Item>
          <Trigger>Item three</Trigger>
          <Content>Item Three content</Content>
        </Item>
      </List>
    </Root>
  );
}