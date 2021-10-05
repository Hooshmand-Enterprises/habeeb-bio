import { css } from 'lit';

export const timelineStyle = css`
  .cd-container {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 10%;
    border-radius: 2px;
  }

  .cd-container::after {
    content: '';
    display: table;
    clear: both;
  }

  #cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  #cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #7e57c2;
  }

  @media only screen and (min-width: 1170px) {
    #cd-timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }
    #cd-timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }

  .cd-timeline-block {
    position: relative;
    margin: 2em 0;
  }

  .cd-timeline-block:after {
    content: '';
    display: table;
    clear: both;
  }

  .cd-timeline-block:first-child {
    margin-top: 0;
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-block {
      margin: 4em 0;
    }
    .cd-timeline-block:first-child {
      margin-top: 0;
    }
    .cd-timeline-block:last-child {
      margin-bottom: 0;
    }
  }

  .cd-timeline-img {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #7e57c2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .cd-timeline-img {
    background: #673ab7;
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      margin-top: 8px;
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
    }
  }
`;
