Vue.component( 'plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
});

new Vue({
    el: '#app',
    data: {
        plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict']
    }
});