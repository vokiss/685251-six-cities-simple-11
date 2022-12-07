import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../404/404';
import PrivateRoute from '../private-route/private-route';
import { useState } from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainPageEmpty from '../../pages/main-page/main-page-empty';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  const [activeCard, setActiveCard] = useState(1);

  if (isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
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
              <PrivateRoute>
                <PropertyPage
                  activeCard={activeCard} onSelectCard={setActiveCard}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<Page404/>}
          />
          <Route
            path={AppRoute.MainEmpty}
            element={<MainPageEmpty />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
