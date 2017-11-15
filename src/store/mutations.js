import * as types from './mutation_type'
export default{
  [types.SEND_NAME](state,usernameData){
    state.usernamemsg=usernameData;
  }
}
