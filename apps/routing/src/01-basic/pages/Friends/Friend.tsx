import { gutter } from '@learn-linaria/core/src/utils/Style';
import { css } from '@linaria/core';
import { useParams } from 'react-router-dom';
import { getFriendById } from '.';

export const Friend = () => {
  const { id = '' } = useParams();

  const friend = getFriendById(id);

  if (!friend) {
    return <p>Friends with id {id} does not exist.</p>;
  }

  return (
    <article className={styleBase}>
      <h3>
        {friend.nameJa} <small>{friend.nameEn}</small>
      </h3>
      <p>{friend.family}</p>
    </article>
  );
};

const styleBase = css`
  padding: ${gutter(4)};
  border: 1px solid;
`;
