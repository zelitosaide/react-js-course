export function getImageUrl(person, size = "s") {
  return `https://i.imgur.com/${person.imageId + size}.jpg`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
