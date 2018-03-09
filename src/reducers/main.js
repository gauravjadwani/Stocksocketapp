let INITIAL_STATE={
dataList:[[],[]]
}
export default (state=INITIAL_STATE,action) => {
  console.log(action,'inside main reducer',action.payload);
  switch(action.type){
          case 'WEB_SOCKETS':
            return {...state,
              dataList:action.payload
            }
      default:
        return state;
  }
}
