import styled from 'styled-components';

export const BoardArea = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 769px) {
    container-type: size;
    flex: none;
    height: 100%;
    min-height: 0;
    align-self: stretch;
  }

  @media (max-width: 768px) {
    flex: none;
    min-height: unset;
    padding: 0.125rem 0;
  }
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: clamp(6px, 2vw, 14px);
  aspect-ratio: 1;
  flex-shrink: 0;
  width: min(280px, 72vw, 100%);
  max-width: 100%;

  @media (min-width: 769px) {
    container-type: inline-size;
    width: min(100cqi, 100cqb);
    max-width: 100%;
    max-height: 100%;
    gap: clamp(8px, 1.5cqi, 14px);
  }

  @media (max-width: 768px) {
    max-height: none;
  }
`;
