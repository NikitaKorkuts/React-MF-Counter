import React, {FC, PropsWithChildren} from 'react';

import { Counter } from '../counter/Counter';

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Counter />
      </header>
      <main>
        {children}
      </main>
    </>
  );
};