new Vue ({
    el: '#app',
    data: {
        message: 'Salut les gens',
        message2: 'MushuLeDragon',
        message3: 'MushuLeDragon avec titre',
        link: 'https://github.com/MushuLeDragon',
        success: true,
        persons: ['Amonok', 'MushuLeDragon', 'tsauvajon', 'SXAsor', 'GoldenShower']
    },
    methods: {
        close: function () {
            this.success = false
        }
    }
})