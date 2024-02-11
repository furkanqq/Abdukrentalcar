import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import Images from '../../assets/images';

const Banner = () => {
  return (
    <div className="banner">
      <div className="cover"></div>
      <div className="content">
        <div className="text">
          <h1>Aradigin Arac Daha Ucuza Burada!</h1>
          <p>
            Seyahatinizi daha konforlu ve özgür kılmak için buradayız! AUTOPIA
            geniş araç filosu ve kullanıcı dostu hizmetleri ile size unutulmaz
            bir kiralama deneyimi sunuyor.
          </p>
          <button className="contact">Contact</button>
        </div>
        <div className="image">
          <img src={Images.Banner} alt="bannerImage" height={600} width={800} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
