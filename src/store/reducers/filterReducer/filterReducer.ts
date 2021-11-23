import {createReducer} from '@reduxjs/toolkit';
import {SetSelected} from "./actionCreators";

interface IFilterItem {
    name: string,
}

interface IInitialState {
    filterItems: IFilterItem[],
    selected: string,
}

const initialState: IInitialState = {
    filterItems: [
        {
            name: 'Всё',
        },
        {
            name: 'Инфраструктурные задачи',
        },
        {
            name: 'Меньше вёрстки',
        },
        {
            name: 'Продуктовые задачи',
        },
        {
            name: 'Архитектурные задачи',
        },
        {
            name: 'Люблю рефакторить',
        },
        {
            name: 'Стартап',
        },
        {
            name: 'Хочу высоконагруженный сервис',
        },
        {
            name: 'Хочу внешний сервис',
        },
        {
            name: 'Хочу производительность/скорость',
        },
        {
            name: 'Общие решения/библиотеки',
        },
        {
            name: 'Социально значимый сервис',
        },
    ],
    selected: 'Всё',
}

export const filterReducer = createReducer(
    initialState,
    {
        ['SET_SELECTED']: (state, action: SetSelected) => {
            state.selected = action.payload.name;
        }
    });