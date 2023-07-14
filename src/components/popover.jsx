import "./popover.css";

import { Root, Trigger, Portal, Content, Arrow } from "@radix-ui/react-popover";

export default function Component({ trigger, content }) {
  return (
    <Root>
      <Trigger className="PopoverTrigger">{trigger}</Trigger>
      <Portal>
        <Content className="PopoverContent">
          {content}
          <Arrow className="PopoverArrow" />
        </Content>
      </Portal>
    </Root>
  );
}