import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class UserCard extends PolymerElement {

    static get template() {
        return html`
            <style>
               #bgImg {
                   width: 320px;
                   height: 182px;
                   margin-top: -22px;
               }
               #avatar {
                   width: 60px;
                   height: 60px;
                   border-radius: 50%;
                   position: relative;
                   margin: auto -95px -200px 32px
               }
               .card {
                   width: 320px;
                   margin: 100px auto;
                   height: var(--card-height, 280px);
                   background-color: white;
                   box-shadow: 1px 1px 10px 0 gray;
               }
               #username {
                font-family: 'Roboto Mono';
                font-size: 16px;
                position: relative;
                margin-left: 45%;
                margin-top: 0%;
                margin-bottom: 0%;
               }
               #title {
                font-size: 12px;
                position: relative;
                margin-left: 36%;
                margin-top: 2%;
                font-style: italic;
               }
            </style>

            <div class="card">
                <img id="avatar" src$="[[avatarImg]]">
                <img id="bgImg" src$="[[bgImg]]">
                <p id="username">[[username]]</p>
                <p id="title">[[title]]&nbsp;&nbsp;&nbsp;&nbsp;[[date]]</p>
                <div id="desc">
                   {{desc}}
                </div>
            </div>
        `;
    }

    static get importMeta() { 
        return import.meta; 
    }  

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            bgImg: {
                type: String,
                value: `./images/bg.jpeg`
            },
            avatarImg: {
                type: String,
                value: './images/avatar.png',
                notify: true
            },
            username: {
                type: String,
                value: 'Name'
            },
            title: {
                type: String,
                value: 'programmer'
            },
            date: {
                type: Date,
                value: () => new Date().toLocaleString().split(',')[0]
            },
            desc: {
                type: String,
                value: "Your descriptions here"
            }
        };
    }

    /**
     * Use for one-time configuration of your component after local DOM is
     * initialized.
     */
    ready() {
        super.ready();
    }
}
