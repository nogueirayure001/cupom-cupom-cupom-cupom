import { Link } from "react-router-dom";

import { List, NormalItem, IconItem } from "./index";

function LinksList({ list, horizontal }) {
  const items = list.map(({ linkType, labelType, to, label }) => {
    if (linkType === "inner" && labelType === "normal") {
      return (
        <NormalItem>
          <Link to={to}>{label}</Link>
        </NormalItem>
      );
    } else {
      if (labelType === "normal") {
        return (
          <NormalItem>
            <a href={to}>{label}</a>
          </NormalItem>
        );
      } else if (labelType === "icon") {
        return (
          <IconItem>
            <a href={to}>{label}</a>
          </IconItem>
        );
      }
    }

    return null;
  });

  return <List horizontal={horizontal}>{items}</List>;
}

export default LinksList;
