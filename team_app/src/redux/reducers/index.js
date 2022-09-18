import {combineReducers} from 'redux';
import { MemberReducer} from './MemberReducer';

const reducers=combineReducers({
    allMembers:MemberReducer,
})

export default reducers