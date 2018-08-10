"use strict";

angular.module("responsivePopoverMock", ["ovh-angular-responsive-popover", "templates"]);

angular.module("responsivePopoverMock").run(/* @ngInject */ function ($httpBackend) {
    $httpBackend.whenGET("my-test.html").respond(200, {});
});
