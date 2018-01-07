import { observable, action, useStrict } from 'mobx';

useStrict(true);
class MobxData {
    @observable
    User = {
        isLogin: false
    };

    @observable
    App = {
        showSplash: true,
        modalVisible: false
    }

    @action
    setUserState(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                this.User[key] = element;
            }
        }
    }

    @action
    setApptate(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                this.App[key] = element;
            }
        }
    }
}

const IMobxData = new MobxData();
export { IMobxData }