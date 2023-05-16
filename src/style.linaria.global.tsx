import { css } from '@linaria/core';

const globals = css`
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

// body {
//   @apply bg-brand-onyx text-base font-light text-brand-white desktop:text-xl;
// }
// h1 {
//   @apply font-dazzle text-5xl font-medium tracking-wider desktop:text-8xl;
// }
// h2 {
//   @apply font-dazzle text-xl font-light tracking-wide desktop:text-3xl;
// }
// h3 {
//   @apply font-dazzle text-xl font-medium tracking-wide;
// }
// a {
//   @apply font-dazzle text-base font-light hover:underline desktop:text-xl;
// }
// p {
//   @apply text-base font-normal leading-relaxed tracking-wider desktop:text-xl;
// }
// button {
//   @apply font-sans text-base font-medium tracking-widest desktop:text-xl;
// }
// footer,
// span {
//   @apply font-dazzle font-light tracking-wider;
// }
// }

export default globals;
