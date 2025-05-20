import puppeteer from 'puppeteer';

const number = [
    
];

const message = [
    'bom%20dia%2C%20isso%20%C3%A9%20um%20teste%20de%20programa%20de%20broadcast'
];

(async () => {
  // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

  // Navigate the page to a URL 
    while (number.length > 0) {
        await page.goto(`https://web.whatsapp.com/send/?phone=${number.pop()}&text=${message}&type=phone_number&app_absent=0`)
        await page.locator('::-p-xpath(//html/body/div[1]/div/div/div[3]/div/div[4]/div/footer/div[1]/div/span/div/div[2]/div[2]/button)').click();
        const text = await page.$eval('._akbu', span => span.innerText);
        console.log(text);
    }
    
})();