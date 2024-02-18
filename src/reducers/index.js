export default function movies(state=[],action){
    if(action.types==='ADD_MOVIES'){
        return action.movies;
    }
    return state
}