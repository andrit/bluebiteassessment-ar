import React, { useState } from 'react';

interface ImageProps {
    buttonTitle: string;
    buttonAction: string;
}
const ButtonEl = ({buttonTitle, buttonAction}:ImageProps) => {
/**
 * buttonAction: <Button action={buttonAction}/>
 */
    return (
        <>
            <article><button>{buttonTitle}</button></article>
        
        </>
    );
};

export default ButtonEl;