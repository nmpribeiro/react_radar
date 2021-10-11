import React, { useEffect, useState } from 'react';
import { RadarUtilities } from '../../radar/utilities/RadarUtilities';
import { RadarContext } from '../../RadarProvider';
import { DataStateLabel } from '../../redux/data/data.state';

import { BlipType, TechItemType } from '../../types';

import style from './TechItem.module.scss';

export const TechItem: React.FC<{
  tech: TechItemType;
  hoveredTech: string | null;
  selected: boolean;
  setTechFilter: (techSlug: string | null) => void;
  setHoveredTech: (techSlug: string | null) => void;
  hoveredItem: BlipType<unknown> | null;
}> = ({ tech, hoveredTech, selected, setTechFilter, setHoveredTech, hoveredItem }) => {
  const {
    state: {
      [DataStateLabel.STATE]: { techKey },
    },
  } = React.useContext(RadarContext);

  const selectTech = () => setTechFilter(tech.slug);

  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(undefined);
  const [isItemHovered, setIsItemHovered] = useState(false);

  useEffect(() => {
    setBackgroundColor(
      selected || (hoveredItem && RadarUtilities.checkItemHasTech(hoveredItem, tech.slug, techKey)) ? tech.color : undefined
    );
    setIsItemHovered(tech.slug === hoveredTech || RadarUtilities.checkItemHasTech(hoveredItem, tech.slug, techKey));
  }, [tech, selected, hoveredItem, hoveredTech]);

  const changeBackgroundEnter = () => {
    setHoveredTech(tech.slug);
    setBackgroundColor(selected ? tech.color : tech.color);
  };
  const changeBackgroundLeave = () => {
    setHoveredTech(null);
    setBackgroundColor(selected ? tech.color : undefined);
  };

  return (
    <button
      style={{
        border: 'none',
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: 1,
        paddingLeft: 10,
        cursor: 'pointer',
        width: '100%',
      }}
      type="button"
      onClick={selectTech}
      onMouseEnter={changeBackgroundEnter}
      onMouseLeave={changeBackgroundLeave}
      onFocus={changeBackgroundEnter}
      onBlur={changeBackgroundLeave}
    >
      <div style={{ backgroundColor: tech.color, marginLeft: 10 }} className={style.techItem} />
      <div style={{ paddingLeft: 20, width: '100%' }}>
        <div
          style={{
            backgroundColor: isItemHovered || selected ? tech.color : backgroundColor,
            color: isItemHovered || selected ? 'white' : tech.color,
            padding: 4,
            border: 1,
            borderColor: 'lightgrey',
            borderStyle: 'solid',
            borderRadius: 5,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {tech.type}
        </div>
      </div>
    </button>
  );
};
