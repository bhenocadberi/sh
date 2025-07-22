export interface Location {
    latitude: number;
    longitude: number;
    name: string;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
}