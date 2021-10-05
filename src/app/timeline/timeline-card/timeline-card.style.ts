import { css } from 'lit';

export const timelineCardStyle = css`
  .cd-timeline-content {
    background: #333c42;
    border-radius: 2px;
    margin-left: 60px;
    margin-right: 30px;
    padding: 1em;
    position: relative;
  }

  .timeline-content-info {
    align-items: center;
    background: #2b343a;
    border-radius: 2px;
    box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-flow: row wrap;
    gap: 0.5em;
    padding: 5px 10px;
  }

  .timeline-content-info > * {
    flex: 1;
  }

  @media (max-width: 500px) {
    .timeline-content-info-title,
    .timeline-content-info-date {
      display: block;
      width: 100%;
    }
  }

  .content-skills {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    justify-content: center;
    margin-bottom: 0;
    padding: 0;
  }

  .content-skills li {
    background: #40484d;
    border-radius: 2px;
    color: rgba(255, 255, 255, 0.7);
    display: inline-block;
    flex-grow: 1;
    margin: 3px 2px;
    padding: 2px 10px;
    text-align: center;
  }

  .cd-timeline-content:after {
    clear: both;
    content: '';
    display: table;
  }

  .cd-timeline-content h2 {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  .cd-timeline-content p,
  .cd-timeline-content .cd-date {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
  }

  .cd-timeline-content .cd-date {
    display: inline-block;
  }

  .cd-timeline-content p {
    line-height: 1.6;
    margin: 1em 0;
  }

  .cd-timeline-content::before {
    border-right: 7px solid #333c42;
    border: 7px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    right: 100%;
    top: 16px;
    width: 0;
  }

  @media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
      font-size: 1.25rem;
      font-size: 20px;
    }
    .cd-timeline-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-content .cd-read-more,
    .cd-timeline-content .cd-date {
      font-size: 0.875rem;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-content::before {
      border-color: transparent;
      border-left-color: #333c42;
      left: 100%;
      top: 24px;
    }
    .cd-timeline-content {
      color: white;
      margin-left: 0;
      margin: 0 5%;
      padding: 1.6em;
      width: 36%;
    }

    .cd-timeline-content .cd-date {
      font-size: 16px;
      font-size: 1rem;
      left: 122%;
      position: absolute;
      top: 6px;
      width: 100%;
    }

    .right {
      float: right;
    }

    .right::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #333c42;
    }

    .right .cd-read-more {
      float: right;
    }

    .right .cd-date {
      left: auto;
      right: 122%;
      text-align: right;
    }
  }
`;
