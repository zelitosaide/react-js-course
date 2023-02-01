import { useEffect, useState } from "react";

export function getImageUrl(person, size = "s") {
  return `https://i.imgur.com/${person.imageId + size}.jpg`;
}

export function formatDate(date) {
  // return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  return new Intl.DateTimeFormat("pt-PT", { weekday: "long" }).format(date);
}

export function getFinalState(baseState, queue) {}

function increment(n) {
  return n + 1;
}

increment.toString = function () {
  return "n => n + 1";
};

export { increment };

export function useTime() {
  const [time, setTime] = useState(function () {
    return new Date();
  });

  useEffect(function () {
    const id = setInterval(function () {
      setTime(new Date());
    }, 1000);

    return function () {
      clearInterval(id);
    };
  }, []);

  return time;
}
