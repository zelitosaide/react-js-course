import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import { useState } from "react";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

export default function MenubarDemo() {
  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);
  
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content align="start" sideOffset={5} alignOffset={-3}>
            <Menubar.Item>
              New Tab <div>⌘ T</div>
            </Menubar.Item>
            <Menubar.Item>
              New Window <div>⌘ N</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>
                Share
                <div>
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent alignOffset={-5}>
                  <Menubar.Item>Email Link</Menubar.Item>
                  <Menubar.Item>Messages</Menubar.Item>
                  <Menubar.Item>Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>
              Print... <div>⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}