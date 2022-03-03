export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    // Remove after finished developing ......
    token: "BQARRsUtLptDxtkPIEZA4yAZ_yKyNqkbX-KQDclEHG4xLU9A_B_8MpyOzhuUieKUDYGu_lroxMMIRJE5gsBAGa2eFGikttIqHlahlcpZik5ACnZQrWiFb5i_jncsrYEzJI6OuIUFcmhgZH5LiHSuzTxY9PWK5Tj1DdUQ998WklwRIU1IBf4",
};

const reducer = (state, action)=>{
console.log(action);

switch(action.type){
     case ' SET_USER':
         return{
             ...state,
             user: action.user
         };
         case 'SET_TOKEN':
             return{
                 ...state,
                 token: action.token
             };
             case 'SET_PLAYLISTS':
                 return{
                     ...state,
                     playlists: action.playlists
                 };
                 case 'SET_DISCOVER_WEELY':
                     return{
                         ...state,
                    discover_weekly: action.discover_weekly
                     }
         default:
             return state;
}
}
export default reducer;