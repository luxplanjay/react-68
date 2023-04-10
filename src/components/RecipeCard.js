import PropTypes from 'prop-types';

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <div style={{ display: 'flex', gap: 8 }}>
        <div>
          <span>Icon</span>
          <p>{time} min</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>
      </div>

      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
