import Component from "@glimmer/component";
import {action} from "@ember/object";
import { tracked } from '@glimmer/tracking';
// import $ from 'jquery';

export default class FileAttachments extends Component {
    @tracked left = 0;
    @tracked width = 0;
    @tracked isOverflowing = false;

    get hasPictures() {
        return this.args.attachments.any(({ext}) => ext === ".jpeg" || ext === ".png" );
    }

    get isLeftArrowEnabled() {
        return this.left > 0;
    }

    get isRightArrowEnabled() {
        return (
            this.width - this.left + 20 >
            this.attachmentWrapper.scrollWidth / 3
        );
    }

    _animateLeft(element, scrollPosition) {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            scrollAmount += 10;
            element.scrollLeft += 10;

            if(scrollAmount >= scrollPosition){
                window.clearInterval(slideTimer);
            }

        }, 25);
    }

    _animateRight(element, scrollPosition) {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            scrollAmount += 10;
            element.scrollLeft -= 10;

            if(scrollAmount >= scrollPosition){
                window.clearInterval(slideTimer);
            }

        }, 25);
    }

    _stopEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    _calculatePosition() {
        if (this.attachmentWrapper) {
            this.element = this.attachmentWrapper.parentNode;
            this.width = this.element.offsetWidth;
            this.left = this.attachmentWrapper.scrollLeft;
            this.isOverflowing = this.attachmentWrapper.scrollWidth > this.width;
        }
    }

    @action
    _setRef(ref) {
        this.attachmentWrapper = ref;

        this._calculatePosition();
    }

    @action
    scrollLeft(e) {
        this._stopEvent(e);

        if (this.left <= 0) return;

        const {scrollLeft, scrollWidth} = this.attachmentWrapper;

        this.left = scrollLeft - scrollWidth / 3;
        this.attachmentWrapper.scrollLeft = this.left;
        // this._animateRight(this.attachmentWrapper, this.left);
    }

    @action
    scrollRight(e) {
        this._stopEvent(e);

        if (this.width - this.left < this.width / 3)
            return;

        const {scrollLeft, scrollWidth} = this.attachmentWrapper;

        this.left = scrollLeft + scrollWidth / 3;
        this.attachmentWrapper.scrollLeft = this.left;
        // this._animateLeft(this.attachmentWrapper, this.left);
    }
}
