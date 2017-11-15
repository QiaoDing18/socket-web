import * as types from './mutation_type'
export default{
  sendUsername({commit},usernameData){
    commit(types.SEND_NAME,usernameData);
  },
}
