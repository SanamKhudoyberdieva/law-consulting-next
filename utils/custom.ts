export function getDescription(item: any, lang = "ru") {
  if (!item) return "";
  if (lang == "ru")
    return item.description_ru.replace(/(?:\\r\\n|\\r|\\n)/g, "<br>");
  return (item["description_" + lang] || item.description_ru).replace(
    /(?:\\r\\n|\\r|\\n)/g,
    "<br>"
  );
}

export function getAddress(item: any, lang = "ru") {
  if (!item) return "";
  if (lang == "ru")
    return item.address_ru.replace(/(?:\\r\\n|\\r|\\n)/g, "<br>");
  return (item["address_" + lang] || item.address_ru).replace(
    /(?:\\r\\n|\\r|\\n)/g,
    "<br>"
  )||"";
}

export function getTitle(item: any, lang = "ru") {
  if (!item) return "";
  if (lang == "ru") return item.title_ru;
  return item["title_" + lang] || item.title_ru;
}

export function getSubtitle(item: any, lang = "ru") {
  if (!item) return "";
  if (lang == "ru") return item.subtitle_ru;
  return item["subtitle_" + lang] || item.subtitle_ru;
}

export function getText(item: any, lang = "ru") {
  if (!item) return "";
  if (lang == "ru") return item.text_ru;
  return item["text_" + lang] || item.text_ru;
}