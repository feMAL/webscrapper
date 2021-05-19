'use strict'

import * as puppeteer from 'puppeteer';

export class CorePuppeteer {
    
    private url: string;
    private name: string;

    constructor(url: string, name: string){
        this.url = url;
        this.name = name;
        console.log(this.name);
    }

    async run(){
        try{
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            console.log(this.url);

            await page.goto('https://google.com');
            await page.pdf({path: 'google.pdf'});
            
            await browser.close();

        }catch(e){
            console.log(e);
        }
    }

}
( async ()=> {
    let corePuppe: CorePuppeteer = new CorePuppeteer('http://lacasadellibro.com.ar','lacasadellibro');
    await corePuppe.run()
        .then(el => console.log('paso!'))
        .catch(err => console.error(err));
}) ();