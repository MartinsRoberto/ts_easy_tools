import React, { useState } from 'react';

type Props = {};

const Velocity = (props: Props) => {
  const [ms, setMs] = useState<string>('');
  const [kmh, setKmh] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  const [miles, setMiles] = useState<string>('');
  const [knots, setKnots] = useState<string>('');

  const units: { [key: string]: number } = {
    ms: 1,
    kmh: 3.6,
    feet: 3.281,
    miles: 2.237,
    knots: 1.944
  };

  const convertVelocity = (value: string, key: string): void => {
    const parsedValue = parseFloat(value.replace(',', '.'));

    if (isNaN(parsedValue)) {
      clear();
      return;
    }

    const defaultVelocity = parsedValue / units[key];

    setMs((defaultVelocity * units.ms).toFixed(2));
    setKmh((defaultVelocity * units.kmh).toFixed(2));
    setFeet((defaultVelocity * units.feet).toFixed(2));
    setMiles((defaultVelocity * units.miles).toFixed(2));
    setKnots((defaultVelocity * units.knots).toFixed(2));
  };

  const clear = (): void => {
    setMs('');
    setKmh('');
    setFeet('');
    setMiles('');
    setKnots('');
  };

  return (
    <div id='velocity'>
      <h2>Conversor de velocidades</h2>
      <form>
        <label>
          <span>m/s</span>
          <input type='text' value={ms} onChange={(e) => convertVelocity(e.target.value, 'ms')} />
        </label>
        <label>
          <span>km/h</span>
          <input type='text' value={kmh} onChange={(e) => convertVelocity(e.target.value, 'kmh')} />
        </label>
        <label>
          <span>pés/s</span>
          <input type='text' value={feet} onChange={(e) => convertVelocity(e.target.value, 'feet')} />
        </label>
        <label>
          <span>milhas/h</span>
          <input type='text' value={miles} onChange={(e) => convertVelocity(e.target.value, 'miles')} />
        </label>
        <label>
          <span>Nó</span>
          <input type='text' value={knots} onChange={(e) => convertVelocity(e.target.value, 'knots')} />
        </label>
      </form>
    </div>
  );
};

export default Velocity;