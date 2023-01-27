import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-slider',
  styleUrl: 'plz-slider.css',
})
export class PlzSlider {
  @Element() el: HTMLElement;

  componentDidRender() {
    console.log(this.el);
    const carousel = this.el.querySelector('.carousel');
    console.log(carousel);
    carousel.addEventListener('mousemove', dragging);
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <i class="icon-left"></i>
          <div class="carousel">
            <slot></slot>
          </div>
          <i class="icon-right"></i>
        </div>
      </Host>
    );
  }
}

const dragging = e => {
  console.log(e.pageX);
};


