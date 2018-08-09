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
        template: require("./ovh-angular-responsive-popover-popup.html")
    };
};
