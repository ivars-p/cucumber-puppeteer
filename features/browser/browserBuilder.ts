import puppeteer, { LaunchOptions, Viewport } from 'puppeteer';

class BrowserBuilder {
    private _options: LaunchOptions & {
        args: string[];
        defaultViewport: Viewport | null;
    } = {
        headless: false,
        args: ['--start-maximized', '--no-sandbox'],
        defaultViewport: null
    };

    setHeadless(headless: boolean) {
        this._options.headless = headless;
        return this;
    }

    setViewport(viewport: Viewport | null) {
        this._options.defaultViewport = viewport;
        return this;
    }

    addArgument(args: string[]) {
        this._options.args = args;
        return this;
    }

    async build() {
        return await puppeteer.launch(this._options);
    }
}

export default BrowserBuilder;
