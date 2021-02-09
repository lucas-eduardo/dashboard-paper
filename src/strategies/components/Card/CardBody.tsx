import { ICardBodyProps } from './ICard';

import { ContainerCardBody } from './styles';

const CardBody = ({ children }: ICardBodyProps) => {
  return (
    <ContainerCardBody className="card-body">{children}</ContainerCardBody>
  );
};

export default CardBody;
