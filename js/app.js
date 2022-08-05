const App = {
    data(){
        return {
            titre_accueil: 'Accueil',
            titre_gestion: 'Panneau de gestion',
            showAccueil: false,
            showCreateForm: false,
            showStudentsList: false,
        }
    },
    mounted() {
        this.changeNavigationState("accueil")
    },
    methods: {
        goToHome() {
            this.changeNavigationState("accueil")
        },
        goToCreateForm() {
            this.changeNavigationState("create")
        },
        goToStudentsList() {
            this.changeNavigationState("list")
        },
        changeNavigationState(destination) {
            this.showAccueil = false
            this.showCreateForm = false
            this.showStudentsList = false

            switch (destination) {
                case "accueil":
                    this.showAccueil = true
                    break;
                case "create":
                    this.showCreateForm = true
                    break;
                case "list":
                    this.showStudentsList = true
                    break;
            
                default:
                    this.showAccueil = true
                    break;
            }
        }
    }
}

Vue.createApp(App).mount('#app')