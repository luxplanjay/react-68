import { RecipeDifficulty } from 'constants';
import styled from 'styled-components';

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 12px;

  :hover {
    color: orange;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 12px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.black};

  background-color: ${({ active, type, theme }) => {
    if (!active) {
      return theme.colors.white;
    }

    switch (type) {
      case RecipeDifficulty.easy:
        return 'green';
      case RecipeDifficulty.medium:
        return 'orange';
      case RecipeDifficulty.hard:
        return 'red';
      default:
        throw new Error(`Unknown badge type ${type}`);
    }
  }};

  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;

// export const Badge = styled.span`
//   padding: 8px 12px;
//   border-radius: ${p => p.theme.radii.sm};
//   border: 1px solid ${p => p.theme.colors.black};

//   background-color: ${p => {
//     return p.active ? p.theme.colors.accent : p.theme.colors.white;
//   }};

//   color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black;
//   }};
// `;
