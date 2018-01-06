import { observable, action, useStrict } from 'mobx';

useStrict(true);
class MobxData {
    @observable
    User = {
        isLogin: false
    };

    @action
    setUserState(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                User[key] = element;
            }
        }
    }
}

const IMobxData = new MobxData();
export { IMobxData }