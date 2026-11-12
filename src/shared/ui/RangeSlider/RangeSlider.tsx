import { type ChangeEvent, useState } from 'react';
import { Text } from '@/shared/ui';
import './RangeSlider.css';

type RangeSliderProps = {
  min: number;
  max: number;
  step: number;
  minGap?: number;
  className?: string;
  onChange: (values: { min: number; max: number }) => void;
};

export const RangeSlider = ({
  min,
  max,
  step,
  minGap = step,
  className = '',
  onChange,
}: RangeSliderProps) => {
  const [initialMin] = useState(min);
  const [initialMax] = useState(max);

  const totalRange = initialMax - initialMin || 1;
  const minPercent = ((min - initialMin) / totalRange) * 100;
  const maxPercent = ((max - initialMin) / totalRange) * 100;

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - minGap);
    onChange({ min: value, max });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + minGap);
    onChange({ min, max: value });
  };

  return (
    <div className={`range-slider ${className}`}>
      <div className="range-slider-wrapper">
        <div className="range-slider-track" />
        <div
          className="range-slider-progress"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        <input
          type="range"
          min={initialMin}
          max={initialMax}
          step={step}
          value={min}
          onChange={handleMinChange}
          className="range-slider-input"
        />

        <input
          type="range"
          min={initialMin}
          max={initialMax}
          step={step}
          value={max}
          onChange={handleMaxChange}
          className="range-slider-input"
        />
      </div>
      <div className="range-slider-boundaries">
        <Text color='light' size='default'>{min} ₽</Text>
        <Text color='light' size='default'>{max} ₽</Text>
      </div>
    </div>
  );
};
