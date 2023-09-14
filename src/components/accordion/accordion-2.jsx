import { Root, Item, Header, Trigger } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

export default function AccordionTwo() {
  return (
    <Root>
      <Item value="item-1">

      </Item>
      <Item value="item-2">

      </Item>
      <Item value="item-3">

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