import {
  Globe,
  RefreshCw,
  DollarSign,
  Calendar,
  X,
  Clock,
  Heart,
} from '@styled-icons/feather';
import Chart from 'react-apexcharts';

import {
  CardHeader,
  CardBody,
  CardFooter,
} from '../../strategies/components/Card';

import { Container, WrapperLineOne, WrapperLineTwo, Card } from './styles';

const Dashboard = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <Container>
      <WrapperLineOne>
        <Card>
          <CardBody>
            <div className="dash-info">
              <Globe className="warning" />

              <div>
                <p className="card-category">Capacidade</p>
                <p className="card-title">150GB</p>
              </div>
            </div>
          </CardBody>

          <CardFooter>
            <hr />

            <div>
              <RefreshCw /> <span>Atualize agora</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <div className="dash-info">
              <DollarSign className="success" />

              <div>
                <p className="card-category">Receita</p>
                <p className="card-title">R$ 1.345,00</p>
              </div>
            </div>
          </CardBody>

          <CardFooter>
            <hr />

            <div>
              <Calendar /> <span>Último dia</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <div className="dash-info">
              <X className="error" />

              <div>
                <p className="card-category">Erros</p>
                <p className="card-title">23</p>
              </div>
            </div>
          </CardBody>

          <CardFooter>
            <hr />

            <div>
              <Clock /> <span>Na última hora</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <div className="dash-info">
              <Heart className="info" />

              <div>
                <p className="card-category">Seguidores</p>
                <p className="card-title">+45K</p>
              </div>
            </div>
          </CardBody>

          <CardFooter>
            <hr />

            <div>
              <RefreshCw /> <span>Atualize agora</span>
            </div>
          </CardFooter>
        </Card>
      </WrapperLineOne>

      <WrapperLineTwo>
        <Card>
          <CardHeader>
            <h5 className="card-title">Users Behavior</h5>
            <p className="card-category">24 Hours performance</p>
          </CardHeader>

          <CardBody>
            <Chart options={options} series={series} type="line" height={275} />
          </CardBody>

          <CardFooter>
            <hr />

            <div>
              <RefreshCw /> <span>Updated 3 minutes ago</span>
            </div>
          </CardFooter>
        </Card>
      </WrapperLineTwo>

      <span>3</span>
    </Container>
  );
};

export default Dashboard;
