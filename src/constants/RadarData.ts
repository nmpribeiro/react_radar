const HORIZON_SHIFT_RADIUS = 30;

export const RADAR_OPTIONS: RadarOptionsType = {
  title: 'Technology Radar',
  horizons: [],
  quadrants: [],
  width: 600,
  height: 600,
  horizonShiftRadius: HORIZON_SHIFT_RADIUS,
  tech: [],
};

export const horizonPriorityOrder: Record<HorizonKey, number> = { production: 1, validation: 2, idea: 3, prototype: 4 };
export const quadrantPriorityOrder: Record<QuadrantKey, number> = { response: 1, recovery: 2, resilience: 3, preparedness: 4 };

export const HORIZONS_KEY = 'Level of implementation';
export const QUADRANT_KEY = 'Quadrant';
export const TITLE_KEY = 'Title';
export const TECH_KEY = 'Technology';
export const USE_CASE_KEY = 'Use case';
export const DISASTER_TYPE_KEY = 'Origin';
