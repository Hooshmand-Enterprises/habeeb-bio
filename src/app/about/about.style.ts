import { css } from 'lit';

export const aboutStyle = css`
  a {
    color: white;
  }

  section {
    padding: 1em;
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    gap: 1em;
    margin: auto;
  }

  div {
    flex: 2;
  }

  img {
    flex: 1;
    max-width: 100%;
    width: 20em;
  }

  p {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    section {
      flex-flow: column-reverse wrap;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;
