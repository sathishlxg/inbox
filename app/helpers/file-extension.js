import { helper } from "@ember/component/helper";
import { htmlSafe } from "@ember/string";

export function fileExtension([value, ...rest]) {
    switch (value) {
        case ".doc":
        case ".docx":
            return htmlSafe(`<i class="fa fa-file-word-o color-blue"></i>`);
        case ".xls":
        case ".xlsx":
            return htmlSafe(`<i class="fa fa-file-excel-o color-green"></i>`);
        case ".pdf":
            return htmlSafe(`<i class="fa fa-file-pdf-o color-red"></i>`);
        default:
            return htmlSafe(`<i class="fa fa-file-o color-other"></i>`);
    }
}

export default helper(fileExtension);
