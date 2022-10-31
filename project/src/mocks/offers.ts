import { Offer } from '../types/offers';

export const offers: Offer[] = [{
  id: 1,
  previewImage: 'https://11.react.pages.academy/static/hotel/3.jpg',
  images: ['https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg'] ,
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
    isPro: true
  }
},
{
  id: 2,
  previewImage: 'https://11.react.pages.academy/static/hotel/12.jpg',
  images: ['https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg'] ,
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
    avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    name: 'Terentiy',
    isPro: true
  }
},
{
  id: 3,
  previewImage: 'https://11.react.pages.academy/static/hotel/20.jpg',
  images: ['https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg'] ,
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
    avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    name: 'Terentiy',
    isPro: true
  }
},
{
  id: 4,
  previewImage: 'https://11.react.pages.academy/static/hotel/5.jpg',
  images: ['https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg'] ,
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
    avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    name: 'Terentiy',
    isPro: true
  }
}];
