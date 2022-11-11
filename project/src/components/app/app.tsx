import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../404/404';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                offers = {offers}
                activeCard={activeCard}
                onSelectCard={setActiveCard}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Room}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <PropertyPage
                  offers={offers} activeCard={activeCard} onSelectCard={setActiveCard}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<Page404/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
