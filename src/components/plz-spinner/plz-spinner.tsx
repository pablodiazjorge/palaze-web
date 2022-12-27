import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-spinner',
  styleUrl: 'plz-spinner.css',
  shadow: true,
})
export class PlzSpinner {

  render() {
    return (
      <Host>
        <div class="spinner"><div class="spin"></div></div>
      </Host>
    );
  }

}
