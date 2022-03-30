export type TPlacemark = {
    id: string;
    coordinates?: [number, number];
    lat?: number;
    lon?: number;
    description?: string;
    rating?: number;
    name: string;
    type?: string;
};
