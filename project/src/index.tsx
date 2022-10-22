import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
const PLACES_CARD_COUNT = 7;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCardsCount={PLACES_CARD_COUNT}
    />
  </React.StrictMode>,
);
