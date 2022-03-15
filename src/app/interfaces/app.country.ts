export interface Country {
  name: {
    common: string
    official: string
  }
  area: number;
  capital: string[];
  cca2: string;
  flags: {
    png: string;
    svg: string;
  }
  maps: {
    googleMaps: string;
  }
  population: number;
}
