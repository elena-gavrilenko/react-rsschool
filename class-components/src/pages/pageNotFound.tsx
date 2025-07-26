import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button/Button';

export const PageNotFound = () => {
  return (
    <div>
      <h2 style={{ color: 'var(--error-color)', padding: '20px' }}>
        Page not found
      </h2>
      <div className="notFound">
        <Button className="notfound__btn">
          {
            <Link style={{ color: 'var(--txt-color)' }} to="/">
              Back to home
            </Link>
          }
        </Button>
      </div>
    </div>
  );
};
