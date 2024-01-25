import './styles.css';

import avatarMichelle from './images/avatar-michelle.jpg';
import iconShare from './images/icon-share.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconTwitter from './images/icon-twitter.svg';
import iconPinterest from './images/icon-pinterest.svg';

const Header = () => (
  <header>
    <h1 className="primary-header">
      Shift the overall look and feel by adding these wonderful touches to furniture in your home
    </h1>
  </header>
);

const Content = () => (
  <div className="content">
    <p>
      Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some
      simple tips to help you make any room feel complete.
    </p>
  </div>
);

const AuthorInfo = () => (
  <div className="share">
    <img src={avatarMichelle} alt="avatar-michelle" />
    <div className="caption">
      <p className="name">Michelle Appleton</p>
      <p className="date">28 Jun 2020</p>
    </div>
  </div>
);

const ShareIcons = () => (
  <div className="share-icon">
    <img src={iconShare} alt="Share icon" />
    <div className="social">
      <ul>
        <li>
          <p>Share</p>
        </li>
        <li>
          <img src={iconFacebook} alt="facebook" />
        </li>
        <li>
          <img src={iconTwitter} alt="twitter" />
        </li>
        <li>
          <img src={iconPinterest} alt="" />
        </li>
      </ul>
    </div>
  </div>
);

const ArticlePreview = () => (
  <div>
    <main>
      <div className="card">
        <div className="image"></div>
        <div className="info">
          <Header />
          <Content />
          <footer>
            <AuthorInfo />
            <ShareIcons />
          </footer>
        </div>
      </div>
    </main>
  </div>
);

export default ArticlePreview;
