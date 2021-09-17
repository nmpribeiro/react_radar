type QuadsType = { quadrant: number; horizon: number; label: string; outerRadius: number; innerRadius: number };

type BaseCSVType = Record<string, string>;

type RawCSVItem = {
  Title: string;
  Summary: string;
  Description: string;
  'Level of implementation': string;
  Quadrant: string;
  Data: string;
  Description: string;
  Developer: string;
  Implementer: string;
  'Level of implementation': string;
  Organization: string;
  Origin: string;
  Partner: string;
  Quadrant: string;
  'SDG goal': string;
  Source: string;
  Summary: string;
  Technology: string;
  Title: string;
  'Use case': string;
};
interface RawBlipType extends BaseCSVType, RawCSVItem {}

interface BlipType extends RawCSVItem {
  id: string;
  quadrantIndex: number;
  x: number;
  y: number;
}

interface SelectableItem {
  uuid: string;
  name: string;
}

type HorizonKey = 'production' | 'validation' | 'prototype' | 'idea';
type QuadrantKey = 'response' | 'recovery' | 'resilience' | 'preparedness';

interface TechItemType {
  uuid: string;
  color: string;
  type: string;
  slug: string;
}

interface RadarOptionsType {
  title: string;
  width?: number;
  height?: number;
  quadrants: QuadrantKey[];
  horizons: HorizonKey[];
  horizonShiftRadius: number;
  tech: TechItemType[];
}

type D3SvgEl = d3.Selection<SVGSVGElement, unknown, null, undefined>;
type D3SvgGEL = d3.Selection<SVGGElement, unknown, null, undefined>;

type RadarDataAndBLips = {
  radarData: RadarOptionsType;
  blips: BlipType[];
};
