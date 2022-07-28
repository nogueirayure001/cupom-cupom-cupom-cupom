import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { List, NormalItem, IconItem } from './index';

function LinksList({ list, horizontal }) {
  const items = list.map(({ linkType, labelType, to, label }) => {
    if (linkType === 'inner' && labelType === 'normal') {
      return (
        <NormalItem key={nanoid()}>
          <Link to={to}>{label}</Link>
        </NormalItem>
      );
    } else {
      if (labelType === 'normal') {
        return (
          <NormalItem key={nanoid()}>
            <a href={to}>{label}</a>
          </NormalItem>
        );
      } else if (labelType === 'icon') {
        return (
          <IconItem key={nanoid()}>
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
