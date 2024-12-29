import { css } from '@linaria/core';
import { type ChangeEvent } from 'react';

type Props = {
  label: string;
  unit: string;
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
};

export const LabeledSlider = ({ label, unit, min, max, value, onValueChange }: Props) => {
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(value));
  };

  return (
    <div>
      <label className={styleLabel}>
        {label} : <strong>{value}</strong>
        {unit}
      </label>
      <input type="range" className={styleInput} min={min} max={max} value={value} onChange={handleChange} />
    </div>
  );
};

const styleLabel = css`
  display: block;
`;

const styleInput = css`
  width: 100%;
`;
