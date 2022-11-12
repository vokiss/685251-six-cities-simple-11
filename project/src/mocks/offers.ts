import { Offer } from '../types/offers';

export const Offers: Offer[] = [
  {
    id: '1',
    previewImage: 'https://11.react.pages.academy/static/hotel/3.jpg',
    images: ['https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg'],
    title: 'Beautiful & luxurious studio',
    description: 'Lora ipsem lora tafkfLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    isPremium: true,
    type: 'apartment',
    // 'room', 'house', 'hotel'
    rating: 1.5,
    bedrooms: 3,
    maxAdults: 4,
    price: 60,
    goods: ['Wifi', 'heating', 'kitchen', 'Cable'],
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Terentiy',
      isPro: true,
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 0
      }
    }},
  {
    id: '2',
    previewImage: 'https://11.react.pages.academy/static/hotel/12.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg'],
    title: 'Seaview apartament',
    description: 'Lora ipsem lora tafkf',
    isPremium: false,
    type: 'apartment',
    // 'room', 'house', 'hotel'
    rating: 2.5,
    bedrooms: 3,
    maxAdults: 4,
    price: 89,
    goods: ['Wifi', 'heating', 'kitchen', 'Cable'],
    host: {
      id: 2,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Terentiy',
      isPro: true
    },
    lat: 52.3609553943508,
    lng: 4.85309666406198,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 0
      }
    }},
  {
    id: '3',
    previewImage: 'https://11.react.pages.academy/static/hotel/20.jpg',
    images: ['https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg'],
    title: 'Luxurious condo',
    description: 'Lora ipsem lora tafkf',
    isPremium: true,
    type: 'apartment',
    // 'room', 'house', 'hotel'
    rating: 3.5,
    bedrooms: 3,
    maxAdults: 4,
    price: 30,
    goods: ['Wifi', 'heating', 'kitchen', 'Cable'],
    host: {
      id: 3,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Terentiy',
      isPro: true
    },
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 0
      }
    }},
  {
    id: '4',
    previewImage: 'https://11.react.pages.academy/static/hotel/5.jpg',
    images: ['https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg'],
    title: 'Presidential suit room hotel',
    description: 'Lora ipsem lora tafkf',
    isPremium: true,
    type: 'apartment',
    // 'room', 'house', 'hotel'
    rating: 5,
    bedrooms: 3,
    maxAdults: 4,
    price: 55,
    goods: ['Wifi', 'heating', 'kitchen', 'Cable'],
    host: {
      id: 4,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Terentiy',
      isPro: true
    },
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 0
      }
    }}
];
