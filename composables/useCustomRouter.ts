class CustomRouter {
    static history = ['/'];
    static currentRoute = ref({ value: '/' });
    static hideAnimation = ref('');
    static showAnimation = ref('');

    static push(path: string) {
        this.history.push(path);
        this.currentRoute.value.value = path;
        
        this.hideAnimation.value = 'hide-left';
        this.showAnimation.value = 'show-left';
    }

    static pop() {
        if (this.history.length > 1) {
            this.history.pop();
            this.currentRoute.value.value = this.history[this.history.length - 1];

            this.hideAnimation.value = 'hide-right';
            this.showAnimation.value = 'show-right';
        }
    }
}

window.addEventListener('popstate', (ev) => {
    CustomRouter.pop();
    ev.preventDefault();
});

export const useCustomRouter = () => {
    return CustomRouter;
}
