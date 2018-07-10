import * as casual from 'casual-browserify';

import { Persona } from '../models/persona';


const ALL_SHAPES: string[] = ['circle', 'square', 'cross', 'diamond',
  'triangle-up', 'triangle-down', 'triangle-left', 'triangle-right', 'star'
];
const SHAPES: string[] = ['square', 'cross', 'diamond', 'triangle-up', 'star'];
const COLORS: string[] = ['#D36E44', '#D30706', '#0707D2', '#8E1BCE', '#D372D2', '#55D4D2', '#9B180F', '#33820D', '#D39827', '#D3D406'];
const GENDERS: string[] = ['male', 'female', 'other'];
const AGE_GROUPS: string[] = ['07-09', '10-12', '13-18', '19-30', '31-40', '41-50', '51-60', '61-70', '71+'];

const MAX_LAT = 49.3457868; // north lat
const MIN_LAT = 24.7433195; // south lat
const MAX_LNG = -124.7844079; // west long
const MIN_LNG = -66.9513812; // east long

function nullable<T>(value: T, nullProb = .1): T | null {
  return casual.random > nullProb ? value : null;
}

export function mockUSLatLng(): [number, number] {
  return [casual.integer(MIN_LAT, MAX_LAT), casual.integer(MIN_LNG, MAX_LNG)];
}

export class GeneratedPersona implements Persona {
  id: string;
  name: string;
  icon: string;
  color: string;
  gender: 'male' | 'female' | 'other';
  age_group: '07-09' | '10-12' | '13-18' | '19-30' | '31-40' | '41-50' | '51-60' | '61-70' | '71+';
  handedness: 'left' | 'right';
  height: number;
  siblings: number;
  zipcode: string;
  state: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.id = 'person' + casual.integer(1, 500);
    this.name = nullable(casual.first_name);
    this.icon = casual.random_element(SHAPES);
    this.color = casual.random_element(COLORS);
    this.gender = nullable(casual.random_element(GENDERS));
    this.age_group = nullable(casual.random_element(AGE_GROUPS));
    this.handedness = nullable(casual.random > 0.1 ? 'right' : 'left');
    this.height = nullable(casual.integer(36, 96));
    this.siblings = nullable(casual.integer(0, 12));
    this.zipcode = nullable(casual.zip(5));
    this.state = nullable(casual.state);
    [this.latitude, this.longitude] = nullable(mockUSLatLng()) || [null, null];
  }
}

export function MockPersona(source: 'generate' | 'database' = 'generate', db: any = null): Persona {
  if (source === 'database' && db) {
    // FIXME: Pull from db
    return new GeneratedPersona();
  } else {
    return new GeneratedPersona();
  }
}
