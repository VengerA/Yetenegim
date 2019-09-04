import { observable, action } from "mobx";

class MainStore {
    @observable showLogin = true

    @observable apiLink = 'http://18.191.4.87'

    @observable showHome = true

    @observable showUser = false

    @observable showPerson = false

    @observable showAdd = false

    @observable mainUserToken = null

    @observable isPremium = true

    @observable user = {}

    @observable newUser = {
    }

    @observable clickedUser = {

    }

    @observable videoList = []

    @observable cityList = []

    @observable mainUser = {
        username: '',
    }

    
}

const store = new MainStore()

export default store;