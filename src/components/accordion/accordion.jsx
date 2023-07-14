import "./accordion.css";

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <Root collapsible type="single" defaultValue="item-1">
      <Item value="item-1">
        <Header>
          <Trigger>
            Is it accessible?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content>
          <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Content>
      </Item>
      <Item value="item-2">
        <Header>
          <Trigger>
            Is it accessible?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content>
          <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Content>
      </Item>
      <Item value="item-3">
        <Header>
          <Trigger>
            Is it accessible?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content>
          <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Content>
      </Item>
    </Root>
  );
}