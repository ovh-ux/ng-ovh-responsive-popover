import responsivePopoverPopupDirective from './ovh-angular-responsive-popover-popup.directive';

const moduleName = "responsivePopoverPopup";

export default angular
    .module("ovh-angular-responsive-popover-popup", [])
    .directive(moduleName, responsivePopoverPopupDirective)
    .name;
