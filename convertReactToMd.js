const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function extractDataFromJSX(fileContent, attributeNames) {
    const ast = parser.parse(fileContent, { sourceType: 'module', plugins: ['jsx'] });
    let extractedData = {};

    attributeNames.forEach((attributeName) => {
        extractedData[attributeName] = '';
    });

    traverse(ast, {
        JSXElement(path) {
            const openingElement = path.node.openingElement;
            openingElement.attributes.forEach((attr) => {
                if (attr.name && attributeNames.includes(attr.name.name)) {
                    path.node.children.forEach((child) => {
                        if (child.type === 'JSXText') {
                            const textContent = child.value.trim();
                            if (textContent) {
                                extractedData[attr.name.name] += textContent + '\n\n';
                            }
                        }
                    });
                }
            });
        }
    });

    let allTextContent = '';

    traverse(ast, {
        JSXText(path) {
            const textContent = path.node.value.trim();
            if (textContent) {
                allTextContent += textContent + '\n\n';
            }
        }
    });

    Object.values(extractedData).forEach((value) => {
        const regex = new RegExp(value.trim(), 'g');
        allTextContent = allTextContent.replace(regex, '');
    });

    return { extractedData, allTextContent };
}

function extractAndSaveMD(reactComponentPath, mdOutputPath, attributeNames) {
    const fileContent = fs.readFileSync(reactComponentPath, 'utf-8');
    const { extractedData, allTextContent } = extractDataFromJSX(fileContent, attributeNames);
    const mdContent = `---
reactComponent: ${path.basename(reactComponentPath, '.js')}
templateKey: "${extractedData['data-template-key'].trim()}"
permalink: "${extractedData['data-permalink'].trim()}"
title: "${extractedData['data-title'].trim()}"
category: "${extractedData['data-category'].trim()}"
description: |
  ${extractedData['data-description'].trim().split('\n').join('\n  ')}
---

${allTextContent}
`;

    fs.writeFileSync(mdOutputPath, mdContent);
}

function processDirectory(reactFolder, mdFolder, attributeNames, skipFiles, skipFolders) {
    const files = fs.readdirSync(reactFolder);

    files.forEach((file) => {
        const currentPath = path.join(reactFolder, file);

        if (fs.statSync(currentPath).isDirectory()) {
            if (!skipFolders.includes(file)) {
                processDirectory(currentPath, mdFolder, attributeNames, skipFiles, skipFolders);
            }
        } else if (path.extname(file) === '.js' && !skipFiles.includes(file)) {
            const mdOutputPath = path.join(mdFolder, path.basename(file, '.js') + '.md');
            extractAndSaveMD(currentPath, mdOutputPath, attributeNames);
        }
    });
}

function convertReactFilesToMD(reactFolder, mdFolder, attributeNames, skipFiles, skipFolders) {
    if (!fs.existsSync(mdFolder)) {
        fs.mkdirSync(mdFolder);
    }

    processDirectory(reactFolder, mdFolder, attributeNames, skipFiles, skipFolders);
}

const reactFolder = './src/pages';
const mdFolder = './src/markdown/hardcodedPages';
const attributeNames = [
    'data-title',
    'data-description',
    'data-content',
    'data-template-key',
    'data-permalink',
    'data-category'
];
const skipFiles = [
    'security-knowledge-graph.js',
    'cloud-compliance-and-auditing.js',
    'cloud-data-security.js',
    'cloud-misconfigurations.js',
    'remote-work-security.js',
    '404.js',
    'about-us.js',
    'careers.js'
];
const skipFolders = ['campaigns', 'policies'];

function convertReactFilesToMDWrapper() {
    convertReactFilesToMD(reactFolder, mdFolder, attributeNames, skipFiles, skipFolders);

    console.log('React Pages converted to MD resources!');
}

module.exports = convertReactFilesToMDWrapper;
