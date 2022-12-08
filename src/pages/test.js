import React, { useRef } from 'react';

const createImage = (options) => {
    options = options || {};
    const img = document.createElement('img');
    if (options.src) {
        img.src = options.src;
    }
    return img;
};

const copyToClipboard = async (pngBlob) => {
    try {
        await navigator.clipboard.write([
            // eslint-disable-next-line no-undef
            new ClipboardItem({
                [pngBlob.type]: pngBlob
            })
        ]);
        console.log('Image copied');
    } catch (error) {
        console.error(error);
    }
};

const convertToPng = (imgBlob) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imageEl = createImage({ src: window.URL.createObjectURL(imgBlob) });
    imageEl.onload = (e) => {
        canvas.width = e.target.width;
        canvas.height = e.target.height;
        ctx.drawImage(e.target, 0, 0, e.target.width, e.target.height);
        canvas.toBlob(copyToClipboard, 'image/png', 1);
    };
};

const copyImg = async (src) => {
    const img = await fetch(src);
    const imgBlob = await img.blob();
    const extension = src.split('.').pop();
    const supportedToBeConverted = ['jpeg', 'jpg', 'gif'];
    if (supportedToBeConverted.indexOf(extension.toLowerCase())) {
        return convertToPng(imgBlob);
    } else if (extension.toLowerCase() === 'png') {
        return copyToClipboard(imgBlob);
    }
    console.error('Format unsupported');
    return;
};

const Image = () => {
    const ref = useRef(null);
    return (
        <div>
            <img id='image' ref={ref} width='100' src='https://i.imgur.com/Oq3ie1b.jpg' alt='' />
            <button onClick={() => copyImg(ref.current.src)}>copy img</button>
        </div>
    );
};

export default Image;
