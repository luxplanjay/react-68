import { RecipeCard } from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <RecipeCard item={item} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
