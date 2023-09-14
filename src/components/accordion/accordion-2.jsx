import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

import "./accordion-2.css";

export default function AccordionTwo() {
  return (
    <Root className="AccordionRoot" type="multiple">
      <Item className="AccordionItem" value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </Item>
      <Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </Item>
      <Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes! You can animate the Accordion with CSS or JavaScript.
          </div>
        </Content>
      </Item>
    </Root>
  );
}

const AccordionTrigger = forwardRef(function({ children, className, ...props }, forwardedRef) {
  return (
    <Header className="AccordionHeader">
      <Trigger
        className="AccordionTrigger"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Trigger>
    </Header>
  );
});

const AccordionContent = forwardRef(function({ children, className, ...props }, forwardedRef) {
  return (
    <Content
      className="AccordionContent"
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Content>
  );
});