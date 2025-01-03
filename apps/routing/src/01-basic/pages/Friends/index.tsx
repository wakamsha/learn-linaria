import { gutter } from '@learn-linaria/core/src/utils/Style';
import { css } from '@linaria/core';
import { generatePath, Link, Outlet } from 'react-router-dom';
import { Router } from '../../constants/Router';

export const Friends = () => (
  <main className={styleBase}>
    <h1>Friends page</h1>

    <div className={styleContent}>
      <List />
      <Outlet />
    </div>
  </main>
);

const styleBase = css`
  > :not(:first-child) {
    margin-top: ${gutter(4)};
  }
`;

const styleContent = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${gutter(4)};
`;

const List = () => (
  <ul>
    {FriendData.map(({ id, nameJa }) => (
      <li key={id}>
        <Link to={generatePath(Router.Friend, { id })}>{nameJa}</Link>
      </li>
    ))}
  </ul>
);

type FriendType = {
  id: string;
  nameJa: string;
  nameEn: string;
  family: string;
};

const FriendData: FriendType[] = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属',
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属',
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属',
  },
];

export function getFriendById(id: string): FriendType | undefined {
  return FriendData.find((f) => f.id === id);
}
