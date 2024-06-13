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

export interface RootStateImages {
    images: Image[] | null;
    error: ErrorState;
    loading: boolean;
}