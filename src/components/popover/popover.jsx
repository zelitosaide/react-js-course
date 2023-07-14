import "./popover.css";

import { Root, Trigger, Portal, Content, Arrow } from "@radix-ui/react-popover";

export default function Popover({ trigger, content }) {
  return (
    <Root>
      <Trigger className="PopoverTrigger">{trigger}</Trigger>
      <Portal>
        <Content className="PopoverContent" sideOffset={5}>
          {content}
          <Arrow className="PopoverArrow" />
        </Content>
      </Portal>
    </Root>
  );
}