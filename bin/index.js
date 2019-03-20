#!/usr/bin/env node
'use strict'

const fs = require("fs");
const path = require('path');
const child_process = require('child_process');
const homedir = require('os').homedir();
const xmljs = require("xml-js");
const inquirer = require('inquirer');
const chalk = require('chalk');

function parse(obj) {
    if (!obj.contents) {
        return {
            type: 'element',
            name: 'outline',
            attributes: {
                title: obj.name,
                text: obj.name
            },
        }
    } else {
        return {
            type: 'element',
            name: 'outline',
            attributes: {
                title: obj.name,
                text: obj.name
            },
            elements: obj.contents.map(item => parse(item))
        }
    }
}

inquirer.prompt([{
    type: 'input',
    name: 'dir',
    message: '请输入你的目标目录（绝对路径）',
    validate: input => {
        return path.isAbsolute(input);
    }
}]).then(answers => {
    const { dir } = answers;

    const opml = {
        declaration: {
            attributes: {
                version: '1.0',
                encoding: "utf-8"
            }
        },
        elements: [{
            type: 'element',
            name: 'opml',
            attributes: {
                version: '1.0'
            },
            elements: [
                {
                    type: 'element',
                    name: 'head',
                    elements: [{
                        type: 'element',
                        name: 'title',
                        elements: [{
                            type: 'text',
                            text: dir,
                        }]
                    }]
                },
                {
                    type: 'element',
                    name: "body",
                    elements: []
                }
            ]
        }]
    };

    child_process.exec(`tree -L 3 --dirsfirst -a -I '.DS_Store|.git' -N ${dir}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        if (stderr) {
            console.log(stderr);
            process.exit(-1);
        }
        fs.writeFileSync(path.join(homedir, 'Desktop/tree.txt'), stdout)
    })
    child_process.exec(`tree -L 3 --dirsfirst -a -I '.DS_Store|.git' -N -J ${dir}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        if (stderr) {
            console.log(stderr);
            process.exit(-1);
        }

        let treeJson = JSON.parse(stdout);

        treeJson = treeJson.filter(item => item.type !== 'report')[0];

        opml.elements[0].elements[1].elements = treeJson.contents.map(parse);
        fs.writeFileSync(path.join(homedir, 'Desktop/tree.opml'), xmljs.js2xml(opml, { compact: false, ignoreComment: true, spaces: 4 }), 'utf-8');

        console.log(chalk.green(`目录结构树和OPMl文件已生成，文件清单：\nOPML文件：${path.join(homedir, 'Desktop/tree.opml')}\n文本文件：${path.join(homedir, 'Desktop/tree.txt')}`))
    })

});






