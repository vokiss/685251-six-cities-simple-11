type CityNameProps = {
  CityName: string;
}

function City ({CityName}: CityNameProps):JSX.Element {

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item tabs__item--active" href="/">
        <span>{CityName}</span>
      </a>
    </li>
  );

}

export default City;
