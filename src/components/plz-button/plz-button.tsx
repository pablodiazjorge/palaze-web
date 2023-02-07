import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})
export class PlzButton {
  @Prop() variant?: string = 'default';
  @Prop() size?: string = 'default';
  @Prop() color?: string = 'default';
  @Prop() corners?: string = 'default';
  @Prop() icon?: string = '';

  @Element() el: HTMLElement;


  /**
   * Method to control when user click in the button type progress
   */
  handleClick() {
    const button = this.el.shadowRoot.querySelector('.progress') as HTMLButtonElement;
    const element = this.el.shadowRoot.querySelector('.spinner') as HTMLElement;
    button.disabled = true;
    element.style.display = 'block';
    setTimeout(() => {
      element.style.display = 'none';
      button.disabled = false;
    }, 2000);
  }

  render() {
    return this.variant == 'default' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + '-color ' + this.size + '-size ' + this.corners + '-border'}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'icon' ? (
      <Host>
        <button class={this.variant + ' ' + this.variant + '-' + this.size + '-size '}>
          <img class={this.variant + '-' + this.size + '-size'} src={'./assets/icon/Icon-' + `${this.icon}` + '.svg'} alt={`${this.icon}`} />
        </button>
      </Host>
    ) : this.variant == 'progress' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + '-color ' + this.size + '-size ' + this.corners + '-border'} onClick={() => this.handleClick()}>
          <div class="spinner">
            <div class="spin"></div>
          </div>
          <slot></slot>
        </button>
      </Host>
    ) : null;
  }
}
