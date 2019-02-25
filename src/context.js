import React, { Component } from 'react';

const Context = React.createContext()
// reducer itu isinya function
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_STUDENT':
        return{
            ...state,
            students : state.students.filter( student => 
            student.id !== action.payload)
        }
        default:
        return state
    }
}

export class Provider extends Component{
    state = {
        students : [ 
            {
                id : 1,
                name : 'Budi',
                email : 'Budiwakwakland@gmail.com',
                phone : 123123121
            },
            {
                id : 2,
                name : 'Mukhlis',
                email : 'Mukhliswakwakland@gmail.com',
                phone : 123123123
            },
            {
                id : 3,
                name : 'Agung',
                email : 'Agungwakwakland@gmail.com',
                phone : 123123122
            },
        ],
        datafashion: [
            {
                id: "ad18abec-fb24-4296-83ee-14a99756dea8",
                name: "Fashion Pria",
                categorySub: [
                    {
                        id: "eba6beee-6706-49c2-95a5-b4f72be6ba0e",
                        name: "Sepatu",
                        categorySubChild: [
                            {
                                id: "3155f392-46b8-4bce-8ad2-ead52dca3953",
                                name: "Sneakers"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f35",
                name: "Fashion Wanita",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Sepatu",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Sneakers"
                            }
                        ]
                    },
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Atasan",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Blouse"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f36",
                name: "Fashion Anak",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Tas Anak",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Tas Selempang Anak"
                            }
                        ]
                    },
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Aksesoris Anak",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Topi Anak"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f37",
                name: "Komputer & Aksesoris",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Peripheral & Aksesoris",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Keyboard"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f38",
                name: "Mainan & Hobi",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Diecast",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Truk & Konstruksi"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Mobil"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Truk & Konstruksi"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Kendaraan Publik"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Milter"
                            }
                        ]
                    }
                ]
            }
        ],
        dispatch : action => {
            this.setState(state => this.setState( state => 
                reducer(state, action)))
        }
    }
    render(){
        return(
            <Context.Provider value = {this.state}> 
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer