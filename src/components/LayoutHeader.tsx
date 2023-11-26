'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

export default function LayoutHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </header>
  );
}
