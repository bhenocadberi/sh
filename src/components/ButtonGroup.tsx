import React from 'react';

type ButtonGroupProps = {
    onButtonClick?: (action: string) => void;
    isLocationPinned?: boolean;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onButtonClick, isLocationPinned }) => {
    return (
        <div>
            <button onClick={() => onButtonClick && onButtonClick('action1')}>Action 1</button>
            <button onClick={() => onButtonClick && onButtonClick('action2')}>Action 2</button>
        </div>
    );
};

export default ButtonGroup;