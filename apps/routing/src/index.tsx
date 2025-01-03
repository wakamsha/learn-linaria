import { LineHeight } from '@learn-linaria/core/src/constants/Style';
import { createContainer } from '@learn-linaria/core/src/utils/Container';
import { StorageProxy } from '@learn-linaria/core/src/utils/Storage';
import { applyGlobalStyle, applyResetStyle, gutter } from '@learn-linaria/core/src/utils/Style';
import { css } from '@linaria/core';
import { StrictMode, useEffect, useState, type ChangeEvent, type FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Basic } from './01-basic';
import { NestRoutesDeep } from './02-nest-routes-deep';

type Type = 'basic' | 'nest-routes-deep';

const storageKey = 'ROUTING_TYPE';

function useTypeConfig() {
  // eslint-disable-next-line react/hook-use-state
  const [storage] = useState(() => new StorageProxy('localStorage'));

  const [type, setType] = useState<Type>(
    storage.getValue(storageKey) === '' ? 'basic' : (storage.getValue(storageKey) as Type),
  );

  useEffect(() => {
    storage.setValue(storageKey, type);
  }, [storage, type]);

  return { type, updateType: setType };
}

const TypeContainer = createContainer(useTypeConfig);

const Components: Record<Type, FC> = {
  basic: Basic,
  'nest-routes-deep': NestRoutesDeep,
};

const BootLoader = () => {
  const { type, updateType } = TypeContainer.useContainer();

  const handleSwitch = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    window.location.replace('/');
    updateType(value as Type);
  };

  const Component = Components[type];

  return (
    <div className={styleBase}>
      <Component />
      <select className={styleSwitch} value={type} onChange={handleSwitch}>
        {Object.keys(Components).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

const styleBase = css`
  position: relative;
`;

const styleSwitch = css`
  position: absolute;
  bottom: ${gutter(8)};
  left: ${gutter(4)};
  padding: ${gutter(1)} ${gutter(2)};
  line-height: ${LineHeight.Regular};
`;

applyResetStyle();

applyGlobalStyle();

const root = createRoot(document.querySelector('#app') as HTMLElement);

root.render(
  <StrictMode>
    <TypeContainer.Provider>
      <BootLoader />
    </TypeContainer.Provider>
  </StrictMode>,
);
