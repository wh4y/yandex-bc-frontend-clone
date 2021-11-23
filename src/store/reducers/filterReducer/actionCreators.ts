export const setSelected = (mark: string) => ({
    type: 'SET_SELECTED',
    payload: {
        mark,
    }
});

export type SetSelected = ReturnType<typeof setSelected>;