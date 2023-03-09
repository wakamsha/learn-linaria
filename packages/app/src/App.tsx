import { LabeledSlider } from '@learn-linaria/core/components/inputs/LabeledSlider';
import { css } from '@linaria/core';
import { useMemo, useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);

  const calcBMI = useMemo(() => {
    const heightMeters = height * 0.01;

    return Math.round(weight / (heightMeters * heightMeters));
  }, [weight, height]);

  return (
    <div className={styleBase}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styleLogo} alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className={styleCard}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className={styleWrapper}>
        <LabeledSlider label="Weight" unit="kg" min={40} max={150} value={weight} onValueChange={setWeight} />
        <LabeledSlider label="Height" unit="cm" min={140} max={220} value={height} onValueChange={setHeight} />
        <p>BMI: {calcBMI}</p>
      </div>

      <p className={styleDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

const styleBase = css`
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
`;

const styleLogo = css`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const styleCard = css`
  padding: 2em;
`;

const styleDocs = css`
  color: #888;
`;

const styleWrapper = css`
  padding: 24px;
  text-align: left;
  border: 1px solid cyan;
`;
