import angular from 'angular';
import responsivePopoverClassDirective from './ovh-angular-responsive-popover-class.directive';

const moduleName = 'ovh-angular-responsive-popover-class';

angular
  .module('ovh-angular-responsive-popover-class', [])
  .directive('responsivePopoverClass', responsivePopoverClassDirective);

export default moduleName;
