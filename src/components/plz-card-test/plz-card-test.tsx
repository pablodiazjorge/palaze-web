import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card-test',
  styleUrl: 'plz-card-test.css',
  shadow: true,
})
export class PlzCardTest {
  @Prop() variant: string = 'default';
  @Prop() url: string = '#';
  @Prop() image: string = './assets/icon/Hero-img.svg';

  render() {
    return (
      <a href={this.url}>
        <div class="card-default">
          <div class="image-container" style={{ 'background-image': `url(${this.image})` }}></div>
          <div class="text-container">
            <slot></slot>
          </div>
        </div>
      </a>

      // <a href={this.url}>
      //   <div class={`card-${this.variant}`}>
      //     <div class={`image-content-${this.variant}`}>
      //       <span class={`overlay-${this.variant}`} style={{ 'background-image': `url(${this.image})` }}></span>
      //     </div>
      //     <div class={`card-content-${this.variant}`}>
      //       <slot></slot>
      //     </div>
      //   </div>
      // </a>
    );
  }
}
