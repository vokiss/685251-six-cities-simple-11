import { CityName } from '../const';

export type Location = {
        latitude: number;
        longitude: number;
        zoom: number;
    }

export type City = {
      name: CityName;
      location: {
        latitude: number;
          longitude: number;
          zoom: number;
      };
    }

export type Host = {
        id: number;
        name: string;
        isPro: boolean;
        avatarUrl: string;
    }

export type Location2 = {
        latitude: number;
        longitude: number;
        zoom: number;
    }
export type Offers = Offer[];

export type Offer = {
  id: number;
  city: City;
  location: Location;
  host: Host;
  bedrooms: number;
  goods: string[];
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  description: string;
    }
