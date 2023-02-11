import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-divider',
  styleUrl: 'plz-divider.css',
  shadow: true,
})
export class PlzDivider {
  @Prop() type: string = 'default';

  render() {
    return (
      <Host>
        <hr class="divider" />
      </Host>
    );
  }
}
