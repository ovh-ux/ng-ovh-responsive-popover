import angular from 'angular';
import responsivePopoverPopupDirective from './ovh-angular-responsive-popover-popup.directive';

const moduleName = 'ovh-angular-responsive-popover-popup';

angular
  .module(moduleName, [])
  .directive('responsivePopoverPopup', responsivePopoverPopupDirective);

export default moduleName;
