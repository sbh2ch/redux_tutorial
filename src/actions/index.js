/**
 * Created by kiost on 2017-07-04.
 */
import * as types from './ActionTypes';

export function increament() {
    return {
        type: types.INCREMENT
    };
}
export function decreament() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}