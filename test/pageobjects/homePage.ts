import { ITEMS } from "../testConstents/commonConstents";
import { SendValue } from "../utils/wdio.helper";
import BasePage from "./basePage";

class HomePage extends BasePage
{
//Locators for HomePage
get searchBox(){return $("//input[@placeholder='Search for anything']");}

//Methods for HomePage
async navigateToUrl(url:string)
{
    this.open(url);
}

async verifyHomePageTitle(title:string)
{
    await browser.pause(5000);
    expect( await browser.getTitle()).toEqual(title);
    // await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
}

async searchItem(itemName:string)
{
 
    await SendValue(this.searchBox,itemName,5000);

}
}
export default new HomePage();