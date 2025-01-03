import { gutter } from '@learn-linaria/core/src/utils/Style';
import { css } from '@linaria/core';
import { BrowserRouter, generatePath, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Router } from './constants/Router';
import { Expenses } from './pages/Expenses';
import { Friends } from './pages/Friends';
import { Friend } from './pages/Friends/Friend';
import { Home } from './pages/Home';
import { Invoice } from './pages/Invoice';
import { Invoices } from './pages/Invoices';

/**
 * @see https://reactrouter.com/docs/en/v6/getting-started/tutorial
 */
export const Basic = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path={Router.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Router.Expenses} element={<Expenses />} />
          <Route path={Router.Invoices} element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path={Router.Invoice} element={<Invoice />} />
          </Route>
          <Route path={Router.Friends} element={<Friends />}>
            {/*
             * `/friends` リンクから 入れ子ページに遷移（表示）したい場合は、
             * このように `Navigate` コンポーネントを element プロパティに渡せば OK。
             * v5 でいう `Redirect` に相当。
             */}
            <Route index element={<Navigate replace to={generatePath(Router.Friend, { id: 'serval' })} />} />
            <Route path={Router.Friend} element={<Friend />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

const Layout = () => (
  <div className={styleBase}>
    <nav>
      <Navigation />
    </nav>
    <div className={styleContent}>
      <Outlet />
    </div>
  </div>
);

const styleBase = css`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const styleContent = css`
  padding: ${gutter(4)};
`;

const NotFound = () => <h1>404 Not Found</h1>;
