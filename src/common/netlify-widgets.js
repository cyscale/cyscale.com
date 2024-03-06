import CMS from 'netlify-cms-app';

CMS.registerEditorComponent({
    label: 'Image',
    id: 'image',
    fromBlock: (match) =>
        match && {
            image: match[1],
            alt: match[2],
            title: match[3],
            classes: match[4],
            width: match[5],
            height: match[6]
        },
    toBlock: function ({ image, alt, title, classes, width, height }, getAsset, fields) {
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${
            classes || ''
        }" style="width:${width / 16 || 'auto'}${width >= 1 ? 'rem' : ''};height:${height / 16 || 'auto'}${
            height >= 1 ? 'rem' : ''
        };"/>`;
    },
    toPreview: ({ image, alt, title, classes, width, height }, getAsset, fields) => {
        return `<img src="${image}" alt="${alt}" title="${title}" class="${classes}" style="width:${width};height:${height};"/>`;
    },
    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" style="width:(.*?);height:(.*?);"\/>$/s,
    fields: [
        {
            label: 'Picture',
            name: 'image',
            widget: 'image',
            media_library: {
                allow_multiple: true
            }
        },
        {
            label: 'Alt Text',
            name: 'alt'
        },
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            default: [' blog-image-shadow '],
            options: [
                ' blog-image-shadow ',
                ' rounded-sm ',
                ' rounded ',
                ' rounded-md ',
                ' rounded-lg ',
                ' rounded-2xl ',
                ' rounded-3xl ',
                ' rounded-full ',
                ' shadow-lg ',
                ' shadow-xl ',
                ' shadow-2xl '
            ]
        },
        {
            label: 'Title',
            name: 'title'
        },
        {
            label: 'Width (px)',
            name: 'width',
            widget: 'number',
            value_type: 'int',
            min: 1
        },
        {
            label: 'Height (px)',
            name: 'height',
            widget: 'number',
            value_type: 'int',
            min: 1
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1 Hero',
    id: 'headingOneHero',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 data-cms='heading-one' class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 data-cms='heading-one' class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 data-cms='heading-one' class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1',
    id: 'headingOne',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H2 Subtitle',
    id: 'headingTwoSubtitle',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth2: match[2]
        },
    toBlock: function ({ classes, texth2 }, getAsset, fields) {
        return `<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly ${classes || ''}">${
            texth2 || ''
        }</h2>`;
    },
    toPreview: ({ classes, texth2 }, getAsset, fields) => {
        return `<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly ${classes}">${texth2}</h2>`;
    },
    pattern: /^<h2 data-cms='heading-two-subtitle' class="titleSection border-title-partly (.*?)">(.*?)<\/h2>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H2',
            name: 'texth2',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'P',
    id: 'paragraph',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            textp: match[2]
        },
    toBlock: function ({ classes, textp }, getAsset, fields) {
        return `<p data-cms='paragraph' class="${classes || ''}">${textp || ''}</p>`;
    },
    toPreview: ({ classes, textp }, getAsset, fields) => {
        return `<p data-cms='paragraph' class="${classes}">${textp}</p>`;
    },
    pattern: /^<p data-cms='paragraph' class="(.*?)">(.*?)<\/p>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text p',
            name: 'textp',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'H1 CTA',
    id: 'headingOneCta',
    fromBlock: (match) =>
        match && {
            classes: match[1],
            texth1: match[2]
        },
    toBlock: function ({ classes, texth1 }, getAsset, fields) {
        return `<h1 data-cms='heading-one-cta' class="${classes || ''}">${texth1 || ''}</h1>`;
    },
    toPreview: ({ classes, texth1 }, getAsset, fields) => {
        return `<h1 data-cms='heading-one-cta' class="${classes}">${texth1}</h1>`;
    },
    pattern: /^<h1 data-cms='heading-one-cta' class="(.*?)">(.*?)<\/h1>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        },
        {
            label: 'Text H1',
            name: 'texth1',
            widget: 'string'
        }
    ]
});

CMS.registerEditorComponent({
    label: 'Break line',
    id: 'breakline',
    fromBlock: (match) =>
        match && {
            classes: match[1]
        },
    toBlock: function ({ classes }, getAsset, fields) {
        return `<br class="${classes || ''}" />`;
    },
    toPreview: ({ classes }, getAsset, fields) => {
        return `<br class="${classes}" />`;
    },
    pattern: /^<br class="(.*?)"\/>$/s,
    fields: [
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'string',
            hint: 'text-blue, text-red, text-xl, text-2xl, text-3xl, text-4xl, text-5xl'
        }
    ]
});

CMS.registerEditorComponent({
    id: 'faq-list',
    label: 'FAQ List',
    fields: [
        {
            label: 'FAQ Items',
            name: 'faqs',
            widget: 'list',
            fields: [
                { label: 'Question', name: 'question', widget: 'string' },
                { label: 'Answer', name: 'answer', widget: 'text' }
            ]
        }
    ],
    pattern: /^<ul class="faq-list">(.*?)<\/ul>$/s,
    fromBlock: function (match) {
        const listItems = match[1]
            .replace(/^<li>/, '')
            .replace(/<\/li>$/, '')
            .split('</li><li>');

        const faqs = listItems.map((faq) => {
            const matched = faq.match(
                /^<p class="question" style="font-weight:bold;">(.*?)<\/p><p class="answer">(.*?)<\/p>$/s
            );
            if (matched) {
                return {
                    question: matched[1],
                    answer: matched[2]
                };
            } else {
                return {
                    question: '',
                    answer: ''
                };
            }
        });
        return { faqs };
    },
    toBlock: function ({ faqs }) {
        return `<ul class="faq-list">${faqs
            .map(
                (faq) =>
                    `<li><p class="question" style="font-weight:bold;">${faq.question}</p><p class="answer">${faq.answer}</p></li>`
            )
            .join('')}</ul>`;
    },
    toPreview: function ({ faqs }) {
        return `<ul class="faq-list">${faqs
            .map(
                (faq) =>
                    `<li><p class="question" style="font-weight:bold;">${faq.question}</p><p class="answer">${faq.answer}</p></li>`
            )
            .join('')}</ul>`;
    }
});

CMS.registerEditorComponent({
    id: 'ctaButton',
    label: 'CTA Button',
    pattern: /^<div class="([^"]*)"><a href="([^"]*)"><button class="([^"]*)">(.*?)<\/button><\/a><\/div>$/,

    fromBlock: (match) => {
        return {
            divClass: match[1],
            href: match[2],
            class: match[3],
            text: match[4]
        };
    },

    toBlock: ({ href, text, pb, pt, lgPb, lgPt }) => {
        const divClasses = `pb-${pb || 0} pt-${pt || 0} lg:pb-${lgPb || 0} lg:pt-${
            lgPt || 0
        } flex flex-col items-center`;
        const buttonClasses =
            'bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind';
        const style = 'padding: 0.625rem 2.5rem;';
        return `<div class="${divClasses}"><a href="${href || '#'}"><button class="${buttonClasses}" style="${style}">${
            text || 'Button Text'
        }</button></a></div>`;
    },

    toPreview: ({ href, text, pb, pt, lgPb, lgPt }) => {
        const divClasses = `pb-${pb || 0} pt-${pt || 0} lg:pb-${lgPb || 0} lg:pt-${
            lgPt || 0
        } flex flex-col items-center`;
        const buttonClasses =
            'bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind';
        const style = 'padding: 0.625rem 2.5rem;';
        return `<div class="${divClasses}"><a href="${href}"><button class="${buttonClasses}" style="${style}">${text}</button></a></div>`;
    },

    fields: [
        {
            label: 'Button Text',
            name: 'text',
            widget: 'string',
            default: 'BOOK A DEMO'
        },
        {
            label: 'Link (href)',
            name: 'href',
            widget: 'string',
            default: '/request-demo/'
        },
        {
            label: 'Padding Bottom (pb)',
            name: 'pb',
            widget: 'number',
            default: 12,
            hint: "Set the bottom padding for mobile and tablets, the default is 12. If you don't want padding set all the paddings to 0 Check documentation for the proper usage: https://tailwindcss.com/docs/padding#add-padding-to-a-single-side"
        },
        {
            label: 'Padding Top (pt)',
            name: 'pt',
            widget: 'number',
            default: 20,
            hint: 'Set the top padding for mobile and tablets, the default is 20.'
        },
        {
            label: 'Desktop Screen Padding Bottom (lg:pb)',
            name: 'lgPb',
            widget: 'number',
            default: 24,
            hint: 'Set the bottom padding for desktop screens, the default is 24.'
        },
        {
            label: 'Desktop Screen Padding Top (lg:pt)',
            name: 'lgPt',
            widget: 'number',
            default: 32,
            hint: 'Set the top padding for desktop screens, the default is 32.'
        }
    ]
});

CMS.registerEditorComponent({
    id: 'youtube',
    label: 'YouTube Video',
    fields: [{ name: 'url', label: 'YouTube Video URL', widget: 'string' }],
    pattern: /^<div style=".*"><iframe\s.*?src="https:\/\/www\.youtube\.com\/embed\/(.+?)".*?><\/iframe><\/div>$/,
    fromBlock: function (match) {
        return {
            url: `https://youtu.be/${match[1]}`
        };
    },
    toBlock: function (obj) {
        const videoId = extractVideoID(obj.url);
        return (
            `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">` +
            `<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>` +
            `</div>`
        );
    },
    toPreview: function (obj) {
        return (
            `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">` +
            `<iframe style="position: absolute; top: 0; left 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${extractVideoID(
                obj.url
            )}?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>` +
            `</div>`
        );
    }
});

function extractVideoID(url) {
    const regex =
        /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

CMS.registerEditorComponent({
    label: 'Linked Image',
    id: 'linked-image',
    fromBlock: (match) =>
        match && {
            url: match[1],
            image: match[2],
            alt: match[3],
            title: match[4],
            classes: match[5],
            width: match[6],
            height: match[7]
        },
    toBlock: function ({ url, image, alt, title, classes, width, height }, getAsset, fields) {
        return `<a href="${url || '#'}"><img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${
            classes || ''
        }" style="width:${width / 16 || 'auto'}${width >= 1 ? 'rem' : ''};height:${height / 16 || 'auto'}${
            height >= 1 ? 'rem' : ''
        };"/></a>`;
    },
    toPreview: ({ url, image, alt, title, classes, width, height }, getAsset, fields) => {
        return `<a href="${
            url || '#'
        }"><img src="${image}" alt="${alt}" title="${title}" class="${classes}" style="width:${width};height:${height};"/></a>`;
    },
    pattern:
        /^<a href="(.*?)"><img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" style="width:(.*?);height:(.*?);"\/><\/a>$/s,
    fields: [
        {
            label: 'URL',
            name: 'url',
            widget: 'string'
        },
        {
            label: 'Picture',
            name: 'image',
            widget: 'image',
            media_library: {
                allow_multiple: true
            }
        },
        {
            label: 'Alt Text',
            name: 'alt'
        },
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            default: [' blog-image-shadow '],
            options: [
                ' blog-image-shadow ',
                ' rounded-sm ',
                ' rounded ',
                ' rounded-md ',
                ' rounded-lg ',
                ' rounded-2xl ',
                ' rounded-3xl ',
                ' rounded-full ',
                ' shadow-lg ',
                ' shadow-xl ',
                ' shadow-2xl '
            ]
        },
        {
            label: 'Title',
            name: 'title'
        },
        {
            label: 'Width (px)',
            name: 'width',
            widget: 'number',
            value_type: 'int',
            min: 1
        },
        {
            label: 'Height (px)',
            name: 'height',
            widget: 'number',
            value_type: 'int',
            min: 1
        }
    ]
});

CMS.registerEditorComponent({
    id: 'idTag',
    label: 'ID Tag',
    fields: [
        {
            name: 'tagType',
            label: 'Tag Type',
            widget: 'select',
            options: ['strong', 'div']
        },
        {
            name: 'id',
            label: 'ID',
            widget: 'string'
        },
        {
            name: 'textContent',
            label: 'Text Content',
            widget: 'string'
        }
    ],
    pattern: /^<(strong|div) id="(.+?)">(.*?)<\/(strong|div)>$/,
    fromBlock: function (match) {
        return {
            tagType: match[1],
            id: match[2],
            textContent: match[3]
        };
    },
    toBlock: function (obj) {
        return `<${obj.tagType} id="${obj.id}">${obj.textContent}</${obj.tagType}>`;
    },
    toPreview: function (obj) {
        return `<${obj.tagType} id="${obj.id}">${obj.textContent}</${obj.tagType}>`;
    }
});

CMS.registerEditorComponent({
    id: 'textButton',
    label: 'Text Button Widget',
    fields: [
        {
            label: 'Heading Text',
            name: 'headingText',
            widget: 'string',
            hint: 'To apply a font gradient to certain words, wrap those words in <span id="font-gradient"></span> and paste them into the input. Doing so will prevent breaking the CMS.'
        },
        {
            label: 'Button Text',
            name: 'buttonText',
            widget: 'string'
        },
        {
            label: 'Link (href)',
            name: 'href',
            widget: 'string'
        }
    ],
    pattern:
        /<div class='mt-16 rounded-tl-2xl rounded-b-2xl grid grid-cols-12 gap-4 bg-zircon py-8 px-4 lg:py-4'[^>]*>[^<]*<div class='col-span-12 lg:col-span-2'>[^<]*<div class='flex justify-center'>[^<]*<img src='[^']+\' alt='' id='img-text-button' \/>[^<]*<\/div>[^<]*<\/div>[^<]*<div class='col-span-12 lg:col-span-6 flex items-center justify-center'>[^<]*<p class='font-montserrat font-bold' id="paragraph-text-button">([^<]+)<\/p>[^<]*<\/div>[^<]*<div class='col-span-12 lg:col-span-4 flex justify-center items-center'>[^<]*<a[^>]+href='([^']+)'[^>]*>[^<]*<span[^>]*>([^<]+)<\/span>[^<]*<\/a>[^<]*<\/div>[^<]*<\/div>/,
    fromBlock: function (match) {
        return {
            headingText: match[1],
            buttonText: match[3],
            href: match[2]
        };
    },
    toBlock: function ({ headingText, buttonText, href }) {
        return `
<div class='mt-16 rounded-tl-2xl rounded-b-2xl grid grid-cols-12 gap-4 bg-zircon py-8 px-4 lg:py-4' style='borderTopRightRadius: 3rem'>
    <div class='col-span-12 lg:col-span-2'>
        <div class='flex justify-center'>
            <img src='/img/cloud-icon-widget.svg' alt='' id='img-text-button' />
        </div>
    </div>
    <div class='col-span-12 lg:col-span-6 flex items-center justify-center'>
         <p class='font-montserrat font-bold' id="paragraph-text-button">
            ${headingText}
        </p>
    </div>
    <div class='col-span-12 lg:col-span-4 flex justify-center items-center'>
        <a class='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind' href='${href}'>
            <span style='padding: 0.625rem 2.5rem' class='text-white block'>
                ${buttonText}
            </span>
        </a>
    </div>
</div>`;
    },
    toPreview: function ({ headingText, buttonText, href }) {
        return this.toBlock({ headingText, buttonText, href });
    }
});

export default CMS;
