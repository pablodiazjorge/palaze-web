import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-figure',
  styleUrl: 'plz-figure.css',
  shadow: true,
})
export class PlzFigure {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() header: string;
  @Prop() footer: string;
  @Prop() width: number;
  @Prop() height: number;

  render() {
    return (
      <figure>
        {this.header ? <figcaption>{this.header}</figcaption> : null}
        <img src={this.src} alt={this.alt} width={this.width} height={this.height} />
        {this.footer ? <figcaption>{this.footer}</figcaption> : null}
      </figure>
    );
  }
}
