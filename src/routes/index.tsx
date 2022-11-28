import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pokedex from '../pages/Pokedex';

export default function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
