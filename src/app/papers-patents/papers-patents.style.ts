import { css } from 'lit';

export const papersPatentsStyle = css`
  section {
    padding: 1em;
  }

  a {
    color: white;
  }

  ul {
    padding-inline-start: 2em;
  }

  li {
    margin-bottom: 0.5em;
  }

  .title {
    margin-bottom: 0.25em;
  }

  @media only screen and (max-width: 768px) {
    .description {
      display: none;
    }
  }
`;
