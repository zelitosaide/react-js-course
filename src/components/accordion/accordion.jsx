import "./accordion.css";

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function Accordion() {
  return (
    <Root className="AccordionRoot" collapsible type="single" defaultValue="item-1">
      <Item value="item-1" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Is it accessible?
            <ChevronRightIcon className="AccordionChevron" aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div className="AccordionContentText">Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Content>
      </Item>
      <Item value="item-2" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Is it unstyled?
            <ChevronRightIcon className="AccordionChevron" aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </div>
        </Content>
      </Item>
      <Item value="item-3" className="AccordionItem">
        <Header className="AccordionHeader">
          <Trigger className="AccordionTrigger">
            Can it be animated?
            <ChevronRightIcon className="AccordionChevron" aria-hidden />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <div className="AccordionContentText">Yes! You can animate the Accordion with CSS or JavaScript.</div>
        </Content>
      </Item>
    </Root>
  );
}