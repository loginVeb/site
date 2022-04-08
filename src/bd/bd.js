
const ADDPOST = 'ADD-POST';

const Store = {

    _State: {

        Arrtext: {
            _arrText: [
                { text: 'мама ', tex: '777' },
                { text: 'мыла ', tex: '888' },
                { text: 'рамму ', tex: '999' },
            ],

        },

        VHOD: {
            NIK: [
                { nik: 'мама ', tex: '777' },
                { text: 'папа ', tex: '888' },
                { text: 'толя ', tex: '555' },
            ],

        },
    },
    getState() {
        return this._State;
    },
    getFunMainRender(funMainRender) {
        return funMainRender
    },

    _AddPost(nikValue, passwordValue) {
        let postText = {
            text: nikValue,
            tex: passwordValue,
        };

        this._State.Arrtext._arrText.push(postText);
        this.getFunMainRender();
    },


    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            this._AddPost(action.text,action.tex);
        }
    }
};

export const reateAction = (textareaValueNi, textareaValuePasswor) => {
    return{
      type: ADDPOST,
        text: textareaValueNi(),
          tex: textareaValuePasswor(),
    }
  
  };

export default Store;
// window.Store = Store;