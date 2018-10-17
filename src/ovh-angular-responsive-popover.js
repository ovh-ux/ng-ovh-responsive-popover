/**
 *  @ngdoc overview
 *
 *  @name responsivePopover
 *
 *  @requires [matchmedia-ng](https://github.com/AnalogJ/matchmedia-ng)
 *  @requires [ui.bootstrap](https://angular-ui.github.io/bootstrap)
 *
 *  @description
 *  _`responsive-popover` module is used to display a popover and adapt it to the screen dimension._
 *
 *  The two major directives are:
 *      - the `responsivePopover` directive that will display a uibPopover to the DOM element you instanciate it;
 *      - the `responsivePopoverClass` directive that is added to the popover popup.
 *
 *  **Note:** when ui-bootstrap will be updated to version >= 2.0, it should be possible to remove `responsivePopover` directive and use uibPopover directive with custom class responsive-popover-class. So `responsivePopoverClass` directive will be the only directive of this component.
 *
 */
import 'angular-ui-bootstrap';
require("matchmedia-ng");

import responsivePopoverDirective from './ovh-angular-responsive-popover.directive';
import responsivePopoverProvider from './ovh-angular-responsive-popover.provider';
import responsivePopoverPopup from './ovh-angular-responsive-popover-popup/ovh-angular-responsive-popover-popup';

import './less/ovh-angular-responsive-popover.less';

console.log('responsive-popover');

angular
    .module("ovh-angular-responsive-popover", [
        "matchmedia-ng",
        "ui.bootstrap",
        responsivePopoverPopup
    ])
    .directive("responsivePopover", responsivePopoverDirective)
    .provider("responsivePopover", responsivePopoverProvider)
    .name;

export default 'ovh-angular-responsive-popover';
