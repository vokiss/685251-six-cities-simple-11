import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../404/404';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainPageEmpty from '../../pages/main-page/main-page-empty';
import { getOffersIsLoading } from '../../store/data-process/selector';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector(getOffersIsLoading);

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
              <MainPage />
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
                <PropertyPage />
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
