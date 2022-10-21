import MainPage from '../../pages/main-page/main-page';


function App(props: {placesCardsCount: number}): JSX.Element {
  return (
    <MainPage placesCardsCount={props.placesCardsCount}/>
  );
}

export default App;
