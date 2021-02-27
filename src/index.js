/*
 * Conlexis - 'with words'
 */

import { readFileSync } from 'fs';
import { join } from 'path';

function metaUrlDir () {
    return join(
        import.meta.url.replace(/^file\:/, ''),
        '../'
    );
}

/**
 * @type Array<{ task: string }>
 */
const tasks = ((path) => {
    try {
        console.dir(metaUrlDir());
        return JSON.parse(
            readFileSync(
                join(
                    metaUrlDir(),
                    path
                ),
                'utf-8'
            )
        );
    } catch (err) {
        return [];
    }
})('../task-list.json');

console.dir(tasks);
