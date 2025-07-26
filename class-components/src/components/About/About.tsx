import { Link } from 'react-router-dom';
import './about.css';
export const About = () => {
  return (
    <div className="about">
      <div className="about__titleGroup">
        <Link className="about__logo" to="/">
          <img src="/images/simons_cat.gif" alt="cat" />
        </Link>

        <h2 className="about__title">About me</h2>
      </div>
      <div className="about__me">
        <p>
          For a long time I worked as an economist. But, finding myself out of
          work, I realized that this specialty firstly: unclaimed, and secondly:
          bored. Therefore, I decided to try myself in IT.{' '}
        </p>
        <p> Education</p>
        <ol>
          <li>
            Graduated from the University. F. Skaryna, specializing in
            mathematics.{' '}
          </li>
          <li>
            Graduated from the Belarusian Trade and Economics University of
            Consumer Cooperatives with a degree in management and economics at
            an enterprise.{' '}
          </li>
        </ol>
      </div>
      <div className="about__rss">
        <a href="https://rs.school/">
          <img
            className="about__rssLogo"
            src="/logoRss.svg"
            alt="logo schools"
          />
        </a>
      </div>
    </div>
  );
};
