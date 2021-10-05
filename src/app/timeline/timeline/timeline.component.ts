import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { html, LitElement } from 'lit';
import { Job } from '../../shared/interfaces/job.interface';
import { TimelineCard } from '../timeline-card/timeline-card.component';
import { timelineStyle } from './timeline.style';
import { classMap } from 'lit/directives/class-map';
import { career } from '../../shared/constants/career.constant';

export class Timeline extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'habeeb-timeline-card': TimelineCard,
    };
  }

  static override styles = [timelineStyle];

  override render() {
    return html`
      <section id="cd-timeline" class="cd-container">
        ${career.map(
          (job: Job, index: number) => html`
            <div class="cd-timeline-block">
              <div class="cd-timeline-img"></div>
              <habeeb-timeline-card
                number="${index}"
                institution="${job.institution}"
                location="${job.location}"
                .positions=${job.positions}
                .skills="${job.skills || []}"
              >
              </habeeb-timeline-card>
            </div>
          `
        )}
      </section>
    `;
  }
}
