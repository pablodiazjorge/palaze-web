import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {
  @Prop() type: string = 'default';

  render() {
    return this.type == 'default' ? (
      <Host>
        <li class={`item-${this.type}`}>
          <slot></slot>
        </li>
      </Host>
    ) : this.type == 'home' ? (
      <Host>
        <li class={`item-${this.type} grid-container`}>
        <div class="grid-item"><img src="./assets/icon/Icon-home-p.svg" alt="github" /></div>
          <slot></slot>
        </li>
      </Host>
    ) : this.type == 'message' ? (
      <Host>
        <li class={`item-${this.type} grid-container`}>
        <div class="grid-item"><img src="./assets/icon/Icon-message-p.svg" alt="github" /></div>
          
          <slot></slot>
        </li>
      </Host>
    ): this.type == 'settings' ? (
      <Host>
        <li class={`item-${this.type} grid-container`}>
        <div class="grid-item"><img src="./assets/icon/Icon-settings-p.svg" alt="github" /></div>
          
          <slot></slot>
        </li>
      </Host>
    ): this.type == 'user' ? (
      <Host>
        <li class={`item-${this.type} grid-container`}>
        <div class="grid-item"><img src="./assets/icon/Icon-user-p.svg" alt="github" /></div>
          
          <slot></slot>
        </li>
      </Host>
    ): null;
  }
}
