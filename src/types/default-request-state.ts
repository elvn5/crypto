type DefaultRequestState<T> = {
    data: null | T,
    error: boolean,
    isLoading: boolean,
    refresh: boolean,
}

export type {
    DefaultRequestState
}
