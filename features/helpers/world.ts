import {setWorldConstructor, World, setDefaultTimeout} from '@cucumber/cucumber';

class CustomWorld extends World {

    private _browser;

    constructor(options) {
        super(options)
    }


    get browser() {
        return this._browser;
    }

    set browser(browser) {
        this._browser = browser;
    }
}

setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld)