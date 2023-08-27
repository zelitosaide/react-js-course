import "./notion.css";

import { useEffect, useState } from "react";

export default function Notion() {
  const [title, setTitle] = useState(0);

  useEffect(function() {
    document.title = title;
  }, [title]);

  return (
    <h1 onClick={function() {
      setTitle(title + 1);
    }} className="button">Notion</h1>
  );
}