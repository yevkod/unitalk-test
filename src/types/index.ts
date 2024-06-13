export interface Image {
    id: string;
    urls: {
        small: string;
    };
    likes: number;
    user: {
        name: string;
    };
}

export interface ErrorState {
    hasError: boolean;
    errorMessage: string | null;
}

export interface RootState {
    images: {images: Image[]};
    error: ErrorState;
    loading: boolean;
}
