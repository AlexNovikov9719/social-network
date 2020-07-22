const ADD_MESSAGE = '/dialogsPage/ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Egor',},
        {id: 2, name: 'Andrew',},
        {id: 3, name: 'Sasha',},
        {id: 4, name: 'Viktor',},
        {id: 5, name: 'Vlad',},
        {id: 6, name: 'Valera',}
    ],
    messages: [
        {id: 1, messages: 'I`m very happy because, i learn React JS'},
        {id: 2, messages: 'I`m very busy now'},
        {id: 3, messages: 'I like all these things'},
        {id: 4, messages: 'You very busy?'},
        {id: 5, messages: 'Hello my friend'},
        {id: 6, messages: 'Sure I love React'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                messages: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})
