import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver';

export function getRandomPromts(prompt) {
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);

    const randomPromt = surpriseMePrompts[randomIndex];

    //if promt is repeat the we have to call once more
    if(randomPromt === prompt) return getRandomPromt(prompt)

    return randomPromt;
}

export async function downloadImage(_id , photo) {
    FileSaver.saveAs(photo , `download-${_id}.jpg`)
}

