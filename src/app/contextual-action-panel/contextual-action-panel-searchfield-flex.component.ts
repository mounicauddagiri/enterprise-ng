import { Component } from '@angular/core';
import { SohoContextualActionPanelRef } from 'ids-enterprise-ng/lib';

@Component({
  templateUrl: 'contextual-action-panel-searchfield-flex.component.html'
})

export class ContextualActionPanelSearchfieldFlexComponent {
  panel: SohoContextualActionPanelRef<unknown>;

  close() {
    this.panel.close();
  }
}
