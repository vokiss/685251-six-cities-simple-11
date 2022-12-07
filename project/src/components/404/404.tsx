import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Page404 (): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>404 Oops! Page not found</title>
      </Helmet>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link to="/">Go to main page</Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
