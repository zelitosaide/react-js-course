import { Root, Item, Header, Trigger } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

import "./accordion-2.css";

export default function AccordionTwo() {
  return (
    <Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
      <Item className="AccordionItem" value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
      </Item>
      <Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      </Item>
      <Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
      </Item>
    </Root>
  );
}

const AccordionTrigger = forwardRef(function({ children, className, ...props }, forwardedRef) {
  return (
    <Header>
      <Trigger
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon aria-hidden />
      </Trigger>
    </Header>
  );
});