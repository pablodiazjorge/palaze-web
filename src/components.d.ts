/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlzButton {
    }
    interface PlzDivider {
    }
    interface PlzMenu {
    }
    interface PlzMenuItem {
        "link": string;
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode": string;
    }
    interface PlzShowcaseRender {
    }
    interface PlzSpinner {
    }
}
declare global {
    interface HTMLPlzButtonElement extends Components.PlzButton, HTMLStencilElement {
    }
    var HTMLPlzButtonElement: {
        prototype: HTMLPlzButtonElement;
        new (): HTMLPlzButtonElement;
    };
    interface HTMLPlzDividerElement extends Components.PlzDivider, HTMLStencilElement {
    }
    var HTMLPlzDividerElement: {
        prototype: HTMLPlzDividerElement;
        new (): HTMLPlzDividerElement;
    };
    interface HTMLPlzMenuElement extends Components.PlzMenu, HTMLStencilElement {
    }
    var HTMLPlzMenuElement: {
        prototype: HTMLPlzMenuElement;
        new (): HTMLPlzMenuElement;
    };
    interface HTMLPlzMenuItemElement extends Components.PlzMenuItem, HTMLStencilElement {
    }
    var HTMLPlzMenuItemElement: {
        prototype: HTMLPlzMenuItemElement;
        new (): HTMLPlzMenuItemElement;
    };
    interface HTMLPlzShowcaseElement extends Components.PlzShowcase, HTMLStencilElement {
    }
    var HTMLPlzShowcaseElement: {
        prototype: HTMLPlzShowcaseElement;
        new (): HTMLPlzShowcaseElement;
    };
    interface HTMLPlzShowcaseCodeElement extends Components.PlzShowcaseCode, HTMLStencilElement {
    }
    var HTMLPlzShowcaseCodeElement: {
        prototype: HTMLPlzShowcaseCodeElement;
        new (): HTMLPlzShowcaseCodeElement;
    };
    interface HTMLPlzShowcaseRenderElement extends Components.PlzShowcaseRender, HTMLStencilElement {
    }
    var HTMLPlzShowcaseRenderElement: {
        prototype: HTMLPlzShowcaseRenderElement;
        new (): HTMLPlzShowcaseRenderElement;
    };
    interface HTMLPlzSpinnerElement extends Components.PlzSpinner, HTMLStencilElement {
    }
    var HTMLPlzSpinnerElement: {
        prototype: HTMLPlzSpinnerElement;
        new (): HTMLPlzSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "plz-button": HTMLPlzButtonElement;
        "plz-divider": HTMLPlzDividerElement;
        "plz-menu": HTMLPlzMenuElement;
        "plz-menu-item": HTMLPlzMenuItemElement;
        "plz-showcase": HTMLPlzShowcaseElement;
        "plz-showcase-code": HTMLPlzShowcaseCodeElement;
        "plz-showcase-render": HTMLPlzShowcaseRenderElement;
        "plz-spinner": HTMLPlzSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface PlzButton {
    }
    interface PlzDivider {
    }
    interface PlzMenu {
    }
    interface PlzMenuItem {
        "link"?: string;
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode"?: string;
    }
    interface PlzShowcaseRender {
    }
    interface PlzSpinner {
    }
    interface IntrinsicElements {
        "plz-button": PlzButton;
        "plz-divider": PlzDivider;
        "plz-menu": PlzMenu;
        "plz-menu-item": PlzMenuItem;
        "plz-showcase": PlzShowcase;
        "plz-showcase-code": PlzShowcaseCode;
        "plz-showcase-render": PlzShowcaseRender;
        "plz-spinner": PlzSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plz-button": LocalJSX.PlzButton & JSXBase.HTMLAttributes<HTMLPlzButtonElement>;
            "plz-divider": LocalJSX.PlzDivider & JSXBase.HTMLAttributes<HTMLPlzDividerElement>;
            "plz-menu": LocalJSX.PlzMenu & JSXBase.HTMLAttributes<HTMLPlzMenuElement>;
            "plz-menu-item": LocalJSX.PlzMenuItem & JSXBase.HTMLAttributes<HTMLPlzMenuItemElement>;
            "plz-showcase": LocalJSX.PlzShowcase & JSXBase.HTMLAttributes<HTMLPlzShowcaseElement>;
            "plz-showcase-code": LocalJSX.PlzShowcaseCode & JSXBase.HTMLAttributes<HTMLPlzShowcaseCodeElement>;
            "plz-showcase-render": LocalJSX.PlzShowcaseRender & JSXBase.HTMLAttributes<HTMLPlzShowcaseRenderElement>;
            "plz-spinner": LocalJSX.PlzSpinner & JSXBase.HTMLAttributes<HTMLPlzSpinnerElement>;
        }
    }
}
