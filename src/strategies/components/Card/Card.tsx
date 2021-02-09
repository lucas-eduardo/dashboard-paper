import { ICardProps } from './ICard';

import { Container } from './styles';

const Card = ({ children, className, style }: ICardProps) => {
  return (
    <Container className={className || ''} style={style}>
      {children}
    </Container>
  );
};

export default Card;
