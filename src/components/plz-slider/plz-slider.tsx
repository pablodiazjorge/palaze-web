import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-slider',
  styleUrl: 'plz-slider.css',
  shadow: true,
})
export class PlzSlider {
  @Element() el: HTMLElement;

  componentDidRender() {
    const carousel = this.el.shadowRoot.querySelector('.plz-carousel');
    const firstElement = this.el.querySelectorAll('plz-card')[0];

    const arrowIcons = this.el.shadowRoot.querySelectorAll('.plz-wrapper i');

    let isDragStart = false,
      prevPageX,
      prevScrollLeft;

    //Obtienes el ancho del elemento y le añades el margen que hay entre estos
    console.log(firstElement.clientWidth);
    let firstImgWidth = firstElement.clientWidth + 10;

    arrowIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        //Cuando se hace click en el icono de la izquierda, se reduce el ancho del scroll de carousel a la iquierda y si no se añade a este
        carousel.scrollLeft += icon.id =="left" ? -firstImgWidth : firstImgWidth;
      });
    });

    const dragStart = e => {
      isDragStart = true;
      prevPageX = e.pageX;
      // scrollLeft te da el numero de pixeles que se scrollea en horizontal
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragStop = () => {
      isDragStart = false;
    };

    const dragging = e => {
      if (!isDragStart) return;
      e.preventDefault();
      let positionDiff = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragStop);
  }

  render() {
    return (
      <Host>
        <div class="plz-wrapper">
          <i id="left" class="icon-left"></i>
          <div class="plz-carousel">
            <slot></slot>
          </div>
          <i id="right" class="icon-right"></i>
        </div>
      </Host>
    );
  }
}

// const dragging = e => {
//   e.pageX;
// };
