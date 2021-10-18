import React, { useState } from 'react';

interface ImageProps {
    src: string;
    alt: string;
}

const ImageEl = ({src, alt}:ImageProps) => (<><img src={src} alt={alt} /></>);

export default ImageEl;