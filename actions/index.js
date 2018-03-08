

export const SET_NAME = (value) => {
console.log('called',value);
    return(dispatch) => {
    dispatch({type: 'SET_NAME', payload:value});

}
