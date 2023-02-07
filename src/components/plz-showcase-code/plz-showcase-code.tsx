import { Component, h, Prop, Element } from '@stencil/core';

import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';

//import 'highlight.js/styles/github.css';

@Component({
  tag: 'plz-showcase-code',
  styleUrl: 'plz-showcase-code.css',
  shadow: true,
})
export class PlzShowcaseCode {
  @Prop() textCode: string;
  @Element() el: HTMLElement;

  codeEl: HTMLElement;

  componentWillLoad() {
    hljs.registerLanguage('xml', xml);
  }

  componentDidLoad() {
    this.codeEl = this.el.shadowRoot.querySelector('pre code') as HTMLElement;
    let esc = this.codeEl.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    this.codeEl.innerHTML = esc;
    hljs.highlightElement(this.codeEl);
    //hljs.highlight(`${this.textCode}`, {language: 'xml'}).value;
  }

  render() {
    return (
      <div>
        <pre class={'parent'}>
          <code class="language-html" innerHTML={this.textCode}></code>
        </pre>
      </div>
    );
  }
}
