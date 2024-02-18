export class Screen {
    constructor(screen) {
        this.screen = screen;
    }
    hide() {
        this.screen.classList.add('hide');
    }

    show() {
        this.screen.classList.remove('hide');
    }
}