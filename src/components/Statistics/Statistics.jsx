import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Stats,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default function Statistics({ title, stats }) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <Stats>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </Stats>
    </Wrapper>
  );
}
