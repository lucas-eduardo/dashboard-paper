import { ContainerCardFooter } from './styles';

const CardFooter: React.FC = ({ children }) => {
  return (
    <ContainerCardFooter className="card-footer">
      {children}
    </ContainerCardFooter>
  );
};

export default CardFooter;
