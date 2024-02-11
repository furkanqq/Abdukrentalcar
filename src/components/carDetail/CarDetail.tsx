import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './carDetail.css';
import Comments from '../comment/Comments';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetByIdCarResponse } from '../../types/responses/Car/getByIdCarResponse';
import carService from '../../services/carService';
import { useEffect, useState } from 'react';
import { carsConfig } from '../../config/car.config';
import Images from '../../assets/images';
import Layout from '../layout';

type Props = {};

const CarDetail = (props: Props) => {
  const carId = useSelector((state: any) => state.carId.carId);

  const [car, setCar] = useState<GetByIdCarResponse>();

  useEffect(() => {
    getByIdCars();
  }, []);

  const getByIdCars = () => {
    carService.getById(carId).then((response) => {
      console.log(response?.data);
      setCar(response?.data);
    });
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/rental');
  };

  return (
    <Layout>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="5" className="car-image">
            <img
              src={Images.Car}
              className="img-fluid"
              alt="Fiat Egea Cross"
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" style={{ marginTop: 30 }}>
            <div className="card-header mt-4">
              <h1 className="card-title  font-weight-bold">
                {carsConfig[1]?.modelName}
              </h1>
            </div>
            <div className="daily-price mt-3">
              <p className="text-dark description font-lg">
                <i className="fas fa-dollar-sign" title="Daily Price"></i>{' '}
                {carsConfig[1]?.dailyPrice}
              </p>
            </div>
            <div className="star-icons justify-content-end mt-1 mb-4">
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
              <MDBIcon className="star" fas icon="star" />
            </div>
            <div className="details">
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon far icon="calendar-alt" /> <strong>Yıl:</strong>
                    {carsConfig[1]?.year}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="tachometer-alt" />{' '}
                    <strong>Kilometre:</strong> {carsConfig[1]?.kilometer}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="car" /> <strong>Plaka:</strong>
                    {carsConfig[1]?.plate}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="credit-card" />{' '}
                    <strong>Min Findeks Puanı:</strong>
                    {carsConfig[1]?.minFindeksRate}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="suitcase" /> <strong>Bagaç Hacmi:</strong>{' '}
                    {car?.trunkVolume}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="cogs" /> <strong>Vites Türü:</strong> car
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="gas-pump" /> <strong>Yakıt Tipi:</strong>{' '}
                    Benzinli
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="users" /> <strong>Kapasite:</strong>{' '}
                    {carsConfig[1]?.capacity}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <MDBIcon icon="palette" /> <strong>Renk:</strong>{' '}
                    {carsConfig[1]?.colorName}
                  </p>
                </div>
              </div>
            </div>
            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg"
              onClick={handleButtonClick}>
              Hemen Kİrala
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <Comments />
      </MDBContainer>
    </Layout>
  );
};

export default CarDetail;
