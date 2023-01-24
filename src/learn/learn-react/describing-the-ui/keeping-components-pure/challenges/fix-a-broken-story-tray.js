import { useState } from "react";
import { stories as initialStories } from "../../../../../utils/data";
import { useTime } from "../../../../../utils/services";

/**
 * Fix a broken story tray
 *
 * The CEO of your company is asking you to add “stories” to your online clock
 * app, and you can’t say no. You’ve written a StoryTray component that accepts a
 * list of stories, followed by a “Create Story” placeholder.
 *
 * You implemented the “Create Story” placeholder by pushing one more fake story
 * at the end of the stories array that you receive as a prop. But for some reason,
 * “Create Story” appears more than once. Fix the issue.
 */
export default function Index() {
  const [stories, setStories] = useState([...initialStories]);
  const time = useTime();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function StoryTray({ stories }) {
  stories.push({ id: "create", label: "Create Story" });

  return (
    <ul>
      {stories.map(function (story) {
        return <li key={story.id}>{story.label}</li>;
      })}
    </ul>
  );
}
