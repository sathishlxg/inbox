import { helper } from "@ember/component/helper";
import { htmlSafe } from "@ember/string";

export function navItemClass([routeName, selectedRouetName]) {
    var klass = (routeName == selectedRouetName) ? 'selected-menu' : '';

    return htmlSafe(klass);
}

export default helper(navItemClass);
