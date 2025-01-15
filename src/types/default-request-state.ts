type DefaultRequestState<T> = {
    data: null | T,
    error: string | null,
    isLoading: boolean,
}

export type {
    DefaultRequestState
}
