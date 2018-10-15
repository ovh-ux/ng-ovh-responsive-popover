import template from './ovh-angular-responsive-popover-popup.html';

export default function () {
    return {
        replace: true,
        scope: {
            uibTitle: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        template
    };
};
