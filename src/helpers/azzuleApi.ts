import axios from 'axios';

export const azzuleApi = axios.create({
    baseURL: import.meta.env.CT_AZZULE_SERVER_API,
});

export const handleApiError = (error: any) => {
    if (axios.isAxiosError(error)) {
        console.error(error);
    }
    else {
        console.error(error);
    }
}
