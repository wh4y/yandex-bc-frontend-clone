export const setSelected = (name: string) => ({
    type: 'SET_SELECTED',
    payload: {
        name,
    }
});

export type SetSelected = ReturnType<typeof setSelected>;