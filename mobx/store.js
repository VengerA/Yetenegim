import { observable, action } from "mobx";

class MainStore {
    @observable showLogin = true

    @observable showHome = true

    @observable showUser = false

    @observable showPerson = false

    @observable showAdd = false


    @observable newUser = {
    }

    @observable clickedUser = {
        name: 'Nicat',
        surname: 'Quliyev',
        sharedDate: '4 gun once',
        sportArea: 'Futbolcu',
        gender: 'Erkek',
        club: 'Sabail',
        city: 'Istanbul',
        mevki: 'Orta Saha',
        birthDay : 2004,
        height: 168,
        weight: 60,
        usedLeg: 'Sag',
        leauge: 'Azerbeycan',
        isPremium: false,
        tffLisans: 123123123
    }

    @observable videoList = [
        {
            name : "Nicat",
            sharedDate: " 4",
            videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15',
            watchNumber: 293,
            commands: [
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        },
        {
            name : 'Nicat',
            sharedDate: "4",
            videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15',
            watchNumber: 299,
            commands: [
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        },
        {
            name : 'asdad',
            sharedDate: "4",
            videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15',
            watchNumber: 299,
            commands: [
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        },
        {
            name : 'asdad',
            sharedDate: "4",
            videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15',
            watchNumber: 299,
            commands: [
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        },
        {
            name : 'asdad',
            sharedDate: "4",
            videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/67351275_2098019603824921_5996558297006604288_n.jpg?_nc_cat=105&_nc_oc=AQmnnzw5P7YEZsnwSM-AbldfjcHYXk-d7HSeC6vmSxKVJISjaWKTer6M9uBeZThJwwA&_nc_ht=scontent-frt3-2.xx&oh=d0106fc2219093d6c1d58d69f580ca81&oe=5DA95B15',
            watchNumber: 299,
            commands: [
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    user: {
                        name : 'asdad',
                        profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                    },
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        }
    ]

    @observable mainUser = {
        name: 'asasdas',
        surname: 'Quliyev',
        sharedDate: '4 gun once',
        sportArea: 'Futbolcu',
        gender: 'Erkek',
        club: 'Sabail',
        city: 'Istanbul',
        mevki: 'Orta Saha',
        birthDay : 2004,
        height: 168,
        weight: 60,
        usedLeg: 'Sag',
        leauge: 'Azerbeycan',
        tffLisans: 123123123,
        isPremium: true,
        personRating: 0,
        profilPhoto:"https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        videoList: [
            {
                name : "Nicat",
                sharedDate: " 4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 293,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            },
            {
                name : 'asdad',
                sharedDate: "4",
                videoUrl: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                videoText: "12 numara orta acan benim",
                profilPhoto: './../static/yetenegimLogo.jpeg',
                watchNumber: 299,
                commands: [
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    },
                    {
                        user: {
                            name : 'asdad',
                            profilPhoto: 'https://www.yetenegim.net/wp-content/uploads/2019/01/nasil.jpg'
                        },
                        id: 1,
                        commandDate: "4 saat once", 
                        commandText: "Sok guzel bir videoo kaardooog"
                    }
                ]
            }
        ],
        friends: [
            {
                name: 'ufuk',
                username: 'Ufooo'
            }
        ]
    }

    @action toggleShowHome = () => {
        this.showHome = !this.showHome
        this.showUser = false 
        this.showPerson =false
        this.showAdd = false
    }
    @action toggleShowUser = () => {
        this.showUser = !this.showUser
        this.showAdd = false 
        this.showHome =false
        this.showPerson = false
    }
    @action toggleShowAdd = () => {
        this.showAdd = true
        this.showUser = false 
        this.showHome =false
        this.showPerson = false
    }
    @action toggleShowPerson = () => {
        this.showPerson = !this.showPerson
        this.showUser = false 
        this.showHome =false
        this.showAdd = false
    }
}

const store = new MainStore()

export default store;