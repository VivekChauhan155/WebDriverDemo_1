export default class BasePage
{
    // Locators for Base Page
    get locName(){return $("");}

    // Methods for Base Page
    async open(url:string)
    {
        browser.url("/"+url);
    }
}