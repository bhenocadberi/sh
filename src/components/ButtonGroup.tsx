import React from 'react';

export type ButtonOption = {
    label: string;
    next?: ButtonOption[];
    form?: boolean;
};

export const jobOptions: ButtonOption[] = [
    { label: 'Laundry', form: true },
    {
        label: 'Automotive',
        next: [
            { label: "Wheel replacement", form: true },
            { label: "Can't start engine", form: true },
            { label: "Brake system", form: true },
        ],
    },
    {
        label: 'Aircon',
        next: [
            {
                label: 'Window AC',
                next: [
                    { label: 'Cleaning', form: true },
                    { label: 'Check up', form: true },
                ],
            },
            {
                label: 'Ductless split AC',
                next: [
                    { label: 'Cleaning', form: true },
                    { label: 'Check up', form: true },
                ],
            },
            {
                label: 'Smart split AC',
                next: [
                    { label: 'Cleaning', form: true },
                    { label: 'Check up', form: true },
                ],
            },
            {
                label: 'Portable AC',
                next: [
                    { label: 'Cleaning', form: true },
                    { label: 'Check up', form: true },
                ],
            },
        ],
    },
    {
        label: 'House',
        next: [
            { label: 'House/room cleaning', form: true },
            { label: 'others', form: true },
        ],
    },
    {
        label: 'Garden',
        next: [
            { label: 'Cleaning and cutting', form: true },
            { label: 'planting', form: true },
        ],
    },
    {
        label: 'Luggage',
        next: [
            { label: 'help carry groceries', form: true },
            { label: 'help carry luggage', form: true },
            { label: 'help carry appliance', form: true },
        ],
    },
];

type Props = {
    options?: ButtonOption[];
    onSelect: (option: ButtonOption) => void;
};

const ButtonGroup: React.FC<Props> = ({ options = jobOptions, onSelect }) => (
    <div>
        {options.map((opt) => (
            <button key={opt.label} onClick={() => onSelect(opt)} style={{ margin: 8 }}>
                {opt.label}
            </button>
        ))}
    </div>
);

export default ButtonGroup;