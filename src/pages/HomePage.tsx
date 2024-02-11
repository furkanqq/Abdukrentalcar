import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../components/carCard/CarCard';
import { Col, Container, Row } from 'react-bootstrap';
import Teams from '../components/teams/Teams';
import Footer from '../components/layout/footer/Footer';
import carService from '../services/carService';
import { GetAllCarResponse } from '../types/responses/Car/getAllCarResponse';
import { setCars } from '../store/car/carSlice';
import Layout from '../components/layout';
import Banner from '../components/banner';
import { carsConfig } from '../config/car.config';

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);
  useEffect(() => {
    getCars();
  }, []);
  const getCars = () => {
    carService.getAll().then((response) => {
      console.log(response.data);

      dispatch(setCars(response.data));
    });
  };

  console.log(cars);

  return (
    <Layout>
      <Banner />
      <Container>
        <Row>
          {carsConfig.map((car: GetAllCarResponse, i: number) => (
            <Col key={i} className="col-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </Container>
      <Teams />
    </Layout>
  );
};

export default HomePage;
