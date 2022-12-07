import { cities, City, CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeCityOffers} from '../../store/action';
import {AppRoute} from '../../const';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { getCity } from '../../selector';

const CitiesList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  const handleCityChange = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const selectedCityName = evt.currentTarget.textContent as CityName;
    if (selectedCityName !== currentCity.name) {
      const selectedCity = cities.find((city) => city.name === selectedCityName) as City;
      dispatch(changeCityOffers(selectedCity));
    }
  };


  return (
    <ul className="locations__list tabs__list">
      {cities.map(({name})=> (
        <li className="locations__item" key={name}>
          <Link
            className={`locations__item-link tabs__item${name === currentCity.name ? ' tabs__item--active' : ''}`}
            to={AppRoute.Main}
            onClick={handleCityChange}
          >
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};


export default CitiesList;
