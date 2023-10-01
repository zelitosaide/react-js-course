import "./dialog.css";

import { Content, Description, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-dialog";

export default function Dialog() {
  return (
    <Root>
      <Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Trigger>
      <Portal>
        <Overlay className="DialogOverlay" />
        <Content className="DialogContent">
          <Title className="DialogTitle">Edit profile</Title>
          <Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
        </Content>
      </Portal>
    </Root>
  );
}