export type PunkResponse = {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: NumberWithUnits;
  boil_volume: NumberWithUnits;
  method: {
    mash_temp: {
      temp: NumberWithUnits;
      duration: number;
    }[];
    fermentation: {
      temp: NumberWithUnits;
    };
    twist: any;
  };
  ingredients: {
    malt: {
      name: string;
      amount: NumberWithUnits;
    }[];
    hops: {
      name: string;
      amount: NumberWithUnits;
      add: string;
      attribute: string;
    }[];
    yeast: string;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
  };
};

type NumberWithUnits = {
  value: number;
  unit: string;
};
