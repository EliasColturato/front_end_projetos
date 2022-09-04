import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './LogoStyle';

export default function Logo({ textLogo }) {
  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <LogoIcon>
          <h1>{textLogo}</h1>
        </LogoIcon>
      </Link>
    </>
  );
}
