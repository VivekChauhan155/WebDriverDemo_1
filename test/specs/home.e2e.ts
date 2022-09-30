import homePage from "../pageobjects/homePage";
import { ITEMS, TITLE } from "../testConstents/commonConstents";
describe("Home Page Test Suite",async()=>{
    var pageTitle= TITLE.HOME_TITLE;
    var item= ITEMS.MOBILE;

    before(async()=>{
        await homePage.navigateToUrl("");
    });
    beforeEach(async()=>{

    });
    it("Verify Home Page Title",async()=>{
        await homePage.verifyHomePageTitle(pageTitle);
        await homePage.searchItem(item);
    });
});
