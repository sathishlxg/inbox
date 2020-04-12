import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class FloatingActionButton extends Component {
    @tracked importantPeople = [
        {
            name: "Sathish kumar",
            email: "sathislxg@yahoo.com",
            imgSrc: "/assets/images/user_1.jpg",
        },
        {
            name: "Max",
            email: "max@gmail.com",
            imgSrc: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
        },
        {
            name: "India",
            email: "India@gmail.com",
            imgSrc: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_i_56.png",
        },
        {
            name: "Doe",
            email: "doe@outlook.com",
            imgSrc: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_d_56.png",
        }
    ];

    @action
    showInvite() {
        this.args.showInvite();
    }

    @action
    onCreateCompose(email) {
        this.args.onCreateCompose(email);
    }
}
