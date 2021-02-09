import { ICardHeaderProps } from './ICard';

import { ContainerHeader } from './styles';

const CardHeader = ({ children }: ICardHeaderProps) => {
  return <ContainerHeader className="card-header">{children}</ContainerHeader>;
};

export default CardHeader;
