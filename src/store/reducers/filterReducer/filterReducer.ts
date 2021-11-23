import {createReducer} from '@reduxjs/toolkit';
import {SetSelected} from "./actionCreators";

interface IFilterItem {
    name: string,
    mark: string,
}

interface IInitialState {
    filterItems: IFilterItem[],
    selected: string,
}

const initialState: IInitialState = {
    filterItems: [
        {
            name: 'Всё',
            mark: 'all',
        },
        {
            name: 'Инфраструктурные задачи',
            mark: 'infrastructure',
        },
        {
            name: 'Меньше вёрстки',
            mark: 'less-layout',
        },
        {
            name: 'Продуктовые задачи',
            mark: 'product',
        },
        {
            name: 'Архитектурные задачи',
            mark: 'architecture',
        },
        {
            name: 'Люблю рефакторить',
            mark: 'refactoring',
        },
        {
            name: 'Стартап',
            mark: 'startup',
        },
        {
            name: 'Хочу высоконагруженный сервис',
            mark: 'high-load-service',
        },
        {
            name: 'Хочу внешний сервис',
            mark: 'external-service',
        },
        {
            name: 'Хочу производительность/скорость',
            mark: 'performance',
        },
        {
            name: 'Общие решения/библиотеки',
            mark: 'common-solutions',
        },
        {
            name: 'Социально значимый сервис',
            mark: 'social-service',
        },
    ],
    selected: 'all',
}

export const filterReducer = createReducer(
    initialState,
    {
        ['SET_SELECTED']: (state, action: SetSelected) => {
            state.selected = action.payload.mark;
        }
    });