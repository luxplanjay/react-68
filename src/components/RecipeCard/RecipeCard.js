import PropTypes from 'prop-types';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  InfoBlock,
  Name,
  Image,
  Meta,
  RecipeInfo,
  BadgeList,
  Badge,
  Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constants';

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
        <Name>{name}</Name>

        <RecipeInfo>
          <InfoBlock>
            <AiOutlineClockCircle size="24" />
            <span>{time} min</span>
          </InfoBlock>
          <InfoBlock>
            <AiOutlinePieChart size="24" />
            <span>{servings} servings</span>
          </InfoBlock>
          <InfoBlock>
            <AiOutlineBarChart size="24" />
            <span>{calories} calories</span>
          </InfoBlock>
        </RecipeInfo>

        <BadgeList>
          <Badge
            active={difficulty === RecipeDifficulty.easy}
            type={RecipeDifficulty.easy}
          >
            Easy
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.medium}
            type={RecipeDifficulty.medium}
          >
            Medium
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.hard}
            type={RecipeDifficulty.hard}
          >
            Hard
          </Badge>
        </BadgeList>

        <Actions>
          <button aria-label="Delete">
            <HiTrash />
          </button>
          <button aria-label="Zoom">
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>
    </Container>
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
