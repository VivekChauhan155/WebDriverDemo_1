export const SendValue=async (elemet:WebdriverIO.Element|any,value:string,timeout=5000)=>{
    await elemet.waitForDisplayed({timeout});
    await elemet.waitForClickable({timeout});
    await elemet.clearValue();
    await elemet.addValue(value)
}
