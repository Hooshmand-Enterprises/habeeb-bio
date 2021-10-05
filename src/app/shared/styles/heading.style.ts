import { css } from 'lit';

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ffc600;
    padding-left: 0.5em;
    padding-right: 0.5em;
    width: calc(100% - 1em);
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: auto;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin: auto;
  }
`;
