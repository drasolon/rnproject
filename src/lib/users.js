import AsyncStorage from '@react-native-community/async-storage';

class User {
    static instance = null;
    _state = {
    };
    _observers=[]

    static get inst() {
        if (User.instance == null) {
            User.instance = new User();
            User.instance.load();
        }
        return User.instance;
    }
    static get state() {
        return User.inst._state;
    }
    static set state(state) {
        User.inst._state = state;
    }
    get(props) {
        return User.inst._state[props];
    }
    clear() {
        let previous = {...User.inst._state} ;
        User.state = {};
        AsyncStorage.setItem('user', JSON.stringify({}));
        for(let i in User.inst._observers) {
            User.inst._observers[i](User.inst._state, previous) ;
        }
    }
    setState(state) {
        let previous = {...User.inst._state} ;
        for(let i in state) {
            User.inst._state[i] = state[i] ;
        }
        AsyncStorage.setItem('user', JSON.stringify(User.inst._state));
        for(let i in User.inst._observers) {
            User.inst._observers[i](User.inst._state, previous) ;
        }
    }
    load() {
        let me = this ;
        AsyncStorage.getItem('user').then(datas => {
            User.instance.setState(JSON.parse(datas));
        });
    }
    login(datas) {
        console.log('datas to fetch', datas);
    }
    onChange(callback) {
        User.inst._observers.push(callback);
        callback(User.inst._state, {})
    }
}

export default User.inst
