import { injectGlobalCss } from 'Frontend/generated/jar-resources/theme-util.js';

import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin';
import $cssFromFile_0 from 'Frontend/styles/shared-styles.css?inline';

injectGlobalCss($cssFromFile_0.toString(), 'CSSImport end', document);
import $cssFromFile_1 from 'Frontend/styles/styles.css?inline';

injectGlobalCss($cssFromFile_1.toString(), 'CSSImport end', document);
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/login/theme/lumo/vaadin-login-overlay.js';
import 'Frontend/generated/jar-resources/flow-component-renderer.js';
import 'Frontend/generated/jar-resources/vaadin-grid-flow-selection-column.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column.js';
import '@vaadin/text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/vertical-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import '@vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/context-menu/theme/lumo/vaadin-context-menu.js';
import 'Frontend/generated/jar-resources/contextMenuConnector.js';
import 'Frontend/generated/jar-resources/contextMenuTargetConnector.js';
import '@vaadin/horizontal-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/grid/theme/lumo/vaadin-grid.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/checkbox/theme/lumo/vaadin-checkbox.js';
import 'Frontend/generated/jar-resources/gridConnector.ts';
import '@vaadin/button/theme/lumo/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import '@vaadin/details/theme/lumo/vaadin-details.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column-group.js';
import 'Frontend/generated/jar-resources/lit-renderer.ts';
import '@vaadin/accordion/theme/lumo/vaadin-accordion-panel.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '00fae1c6f9d2f8189c325903ad5c805c41c508c9c3864537155f4268663df7fe') {
    pending.push(import('./chunks/chunk-1ceb3faebe6ffe31e638a51c2530094e992d5b2c30c41e5957183cef54ecff6e.js'));
  }
  if (key === '5741289efe7f7c171f8daa8ee9acad1ebd2f88f100b85d2c60d5b4afc5208ba1') {
    pending.push(import('./chunks/chunk-0c98ebd9dbec3c55dc04e302636ac747def0ebee5b2aa459e9efd8c29bde3a95.js'));
  }
  if (key === 'c6ddaaa9835d9cecb9d291523a7556679a76f0a657b672578da19f37e12f641f') {
    pending.push(import('./chunks/chunk-5f65120f9abead5640c4e4826d61203ae6f9555288b32143e06db991e4e30349.js'));
  }
  if (key === 'f4037603ce541f566f6a0ee0bbb2ab5cc1a505cd4633b93469bd6e5eda96bccb') {
    pending.push(import('./chunks/chunk-1ceb3faebe6ffe31e638a51c2530094e992d5b2c30c41e5957183cef54ecff6e.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}