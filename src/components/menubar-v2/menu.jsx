import "./menubar.css";

import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import { useState } from "react";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

export default function MenubarDemo() {
  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);
  
  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">File</Menubar.Trigger>
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

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content align="start" sideOffset={5} alignOffset={-3}>
            <Menubar.Item>
              Undo <div>⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item>
              Redo <div>⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>
                Find
                <div>
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>

              <Menubar.Portal>
                <Menubar.SubContent alignOffset={-5}>
                  <Menubar.Item>Search the web…</Menubar.Item>
                  <Menubar.Separator />
                  <Menubar.Item>Find…</Menubar.Item>
                  <Menubar.Item>Find Next</Menubar.Item>
                  <Menubar.Item>Find Previous</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">View</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map(function(item) {
              return (
                <Menubar.CheckboxItem
                  key={item}
                  checked={checkedSelection.includes(item)}
                  onCheckedChange={() =>
                    setCheckedSelection((current) =>
                      current.includes(item)
                        ? current.filter((el) => el !== item)
                        : current.concat(item)
                    )
                  }
                >
                  <Menubar.ItemIndicator>
                    <CheckIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.CheckboxItem>
              );
            })}
            <Menubar.Separator />
            <Menubar.Item>
              Reload <div>⌘ R</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              Force Reload <div>⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">Profiles</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>
              {RADIO_ITEMS.map(function(item) {
                return (
                  <Menubar.RadioItem key={item} value={item}>
                    <Menubar.ItemIndicator>
                      <DotFilledIcon />
                    </Menubar.ItemIndicator>
                    {item}
                  </Menubar.RadioItem>
                );
              })}
            </Menubar.RadioGroup>
            <Menubar.Separator />
            <Menubar.Item>Edit…</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Add Profile…</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}