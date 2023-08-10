import { 
  Root, 
  List, 
  Item, 
  Trigger, 
  Content,
  Sub
} from "@radix-ui/react-navigation-menu";

export default function Submenu() {
  return (
    <Root>
      <List>
        <Item>
          <Trigger>Item one</Trigger>
          <Content>Item one content</Content>
        </Item>
        <Item>
          <Trigger>Item two</Trigger>
          <Content>
            <Sub>
              <List>
                <Item value="sub1">
                  <Trigger>Sub item one</Trigger>
                  <Content>Sub item one content</Content>
                </Item>
                <Item value="sub2">
                  <Trigger>Sub item two</Trigger>
                  <Content>Sub item two content</Content>
                </Item>
              </List>
            </Sub>
          </Content>
        </Item>
      </List>
    </Root>
  );
}