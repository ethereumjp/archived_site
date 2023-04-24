import { css } from '@linaria/core';

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
      font-weight: normal;
      margin: 0;
      padding: 0;
    }

    ol,
    ul {
      list-style: none;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
