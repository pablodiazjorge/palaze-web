/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlzButton {
        "color"?: string;
        "corners"?: string;
        "icon"?: string;
        "size"?: string;
        "variant"?: string;
    }
    interface PlzCard {
        "hover": string;
        "image": string;
        "url": string;
        "variant": string;
    }
    interface PlzColors {
    }
    interface PlzDivider {
        "color": string;
        "height": string;
        "spaceBottom": string;
        "spaceTop": string;
        "type": string;
        "variant": string;
    }
    interface PlzHero {
        "height": string;
        "image": string;
        "variant": string;
    }
    interface PlzMenu {
    }
    interface PlzMenuItem {
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode": string;
    }
    interface PlzShowcaseRender {
        "display": string;
    }
    interface PlzSpinner {
    }
    interface PlzTooltip {
        "clase": string;
    }
}
declare global {
    interface HTMLPlzButtonElement extends Components.PlzButton, HTMLStencilElement {
    }
    var HTMLPlzButtonElement: {
        prototype: HTMLPlzButtonElement;
        new (): HTMLPlzButtonElement;
    };
    interface HTMLPlzCardElement extends Components.PlzCard, HTMLStencilElement {
    }
    var HTMLPlzCardElement: {
        prototype: HTMLPlzCardElement;
        new (): HTMLPlzCardElement;
    };
    interface HTMLPlzColorsElement extends Components.PlzColors, HTMLStencilElement {
    }
    var HTMLPlzColorsElement: {
        prototype: HTMLPlzColorsElement;
        new (): HTMLPlzColorsElement;
    };
    interface HTMLPlzDividerElement extends Components.PlzDivider, HTMLStencilElement {
    }
    var HTMLPlzDividerElement: {
        prototype: HTMLPlzDividerElement;
        new (): HTMLPlzDividerElement;
    };
    interface HTMLPlzHeroElement extends Components.PlzHero, HTMLStencilElement {
    }
    var HTMLPlzHeroElement: {
        prototype: HTMLPlzHeroElement;
        new (): HTMLPlzHeroElement;
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
    interface HTMLPlzTooltipElement extends Components.PlzTooltip, HTMLStencilElement {
    }
    var HTMLPlzTooltipElement: {
        prototype: HTMLPlzTooltipElement;
        new (): HTMLPlzTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "plz-button": HTMLPlzButtonElement;
        "plz-card": HTMLPlzCardElement;
        "plz-colors": HTMLPlzColorsElement;
        "plz-divider": HTMLPlzDividerElement;
        "plz-hero": HTMLPlzHeroElement;
        "plz-menu": HTMLPlzMenuElement;
        "plz-menu-item": HTMLPlzMenuItemElement;
        "plz-showcase": HTMLPlzShowcaseElement;
        "plz-showcase-code": HTMLPlzShowcaseCodeElement;
        "plz-showcase-render": HTMLPlzShowcaseRenderElement;
        "plz-spinner": HTMLPlzSpinnerElement;
        "plz-tooltip": HTMLPlzTooltipElement;
    }
}
declare namespace LocalJSX {
    interface PlzButton {
        "color"?: string;
        "corners"?: string;
        "icon"?: string;
        "size"?: string;
        "variant"?: string;
    }
    interface PlzCard {
        "hover"?: string;
        "image"?: string;
        "url"?: string;
        "variant"?: string;
    }
    interface PlzColors {
    }
    interface PlzDivider {
        "color"?: string;
        "height"?: string;
        "spaceBottom"?: string;
        "spaceTop"?: string;
        "type"?: string;
        "variant"?: string;
    }
    interface PlzHero {
        "height"?: string;
        "image"?: string;
        "variant"?: string;
    }
    interface PlzMenu {
    }
    interface PlzMenuItem {
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode"?: string;
    }
    interface PlzShowcaseRender {
        "display"?: string;
    }
    interface PlzSpinner {
    }
    interface PlzTooltip {
        "clase"?: string;
    }
    interface IntrinsicElements {
        "plz-button": PlzButton;
        "plz-card": PlzCard;
        "plz-colors": PlzColors;
        "plz-divider": PlzDivider;
        "plz-hero": PlzHero;
        "plz-menu": PlzMenu;
        "plz-menu-item": PlzMenuItem;
        "plz-showcase": PlzShowcase;
        "plz-showcase-code": PlzShowcaseCode;
        "plz-showcase-render": PlzShowcaseRender;
        "plz-spinner": PlzSpinner;
        "plz-tooltip": PlzTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plz-button": LocalJSX.PlzButton & JSXBase.HTMLAttributes<HTMLPlzButtonElement>;
            "plz-card": LocalJSX.PlzCard & JSXBase.HTMLAttributes<HTMLPlzCardElement>;
            "plz-colors": LocalJSX.PlzColors & JSXBase.HTMLAttributes<HTMLPlzColorsElement>;
            "plz-divider": LocalJSX.PlzDivider & JSXBase.HTMLAttributes<HTMLPlzDividerElement>;
            "plz-hero": LocalJSX.PlzHero & JSXBase.HTMLAttributes<HTMLPlzHeroElement>;
            "plz-menu": LocalJSX.PlzMenu & JSXBase.HTMLAttributes<HTMLPlzMenuElement>;
            "plz-menu-item": LocalJSX.PlzMenuItem & JSXBase.HTMLAttributes<HTMLPlzMenuItemElement>;
            "plz-showcase": LocalJSX.PlzShowcase & JSXBase.HTMLAttributes<HTMLPlzShowcaseElement>;
            "plz-showcase-code": LocalJSX.PlzShowcaseCode & JSXBase.HTMLAttributes<HTMLPlzShowcaseCodeElement>;
            "plz-showcase-render": LocalJSX.PlzShowcaseRender & JSXBase.HTMLAttributes<HTMLPlzShowcaseRenderElement>;
            "plz-spinner": LocalJSX.PlzSpinner & JSXBase.HTMLAttributes<HTMLPlzSpinnerElement>;
            "plz-tooltip": LocalJSX.PlzTooltip & JSXBase.HTMLAttributes<HTMLPlzTooltipElement>;
        }
    }
}
