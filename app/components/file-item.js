import Component from "@glimmer/component";

export default class FileItem extends Component {
    get isImage() {
        return this.args.file.fileType === "image";
    }

    get isVideo() {
        return this.args.file.fileType === "video";
    }

    get isDocument() {
        return this.args.file.fileType === "document";
    }
}
