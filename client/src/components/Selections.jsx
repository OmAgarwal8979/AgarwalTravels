import React from 'react';

import Selection from './Selection';

import borabora1 from '../assets/images/borabora1.jpg';
import borabora2 from '../assets/images/borabora2.jpg';
import maldives1 from '../assets/images/maldives1.jpg';
import maldives2 from '../assets/images/maldives2.jpg';
import maldives3 from '../assets/images/maldives3.jpg';
import keywest from '../assets/images/keywest.jpg';

const Selections = () => {
  return (
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={borabora1} caption='Bora Bora' />
      <Selection figure={borabora2} caption='Cozumel' />
      <Selection figure={maldives1} caption='Maldives' />
      <Selection figure={maldives2} caption='Jamaica' />
      <Selection figure={maldives3} caption='Antigua' />
      <Selection figure={keywest} caption='Key West' />
    </section>
  );
};

export default Selections;
