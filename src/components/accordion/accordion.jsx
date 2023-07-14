import "./accordion.css";

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export default function Component() {
  return (
    <Root className="AccordionRoot" collapsible type="single" defaultValue="item-1">
      <Item value="item-1" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Is it accessible?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Content>
      </Item>
      <Item value="item-2" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Is it unstyled?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </div>
        </Content>
      </Item>
      <Item value="item-3" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Can it be animated?
            <ChevronDownIcon aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div>Yes! You can animate the Accordion with CSS or JavaScript.</div>
        </Content>
      </Item>
    </Root>
  );
}