import { chromium } from 'playwright';

export interface ScrapedData {
  title: string;
  price: string;
  availability: string;
}

/**
 * Scrapes product data from ExampleSite.com.
 * Returns an object { title, price, availability }.
 */
export async function scrapeExampleSite(): Promise<ScrapedData> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto('https://www.ten-sura.com/', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    const price = await page.evaluate(() => document.querySelector('.price')?.textContent || 'N/A');
    const availability = await page.evaluate(() => document.querySelector('.availability')?.textContent || 'Available');
    return {
      title: title?.trim() || '',
      price: price?.trim() || 'N/A',
      availability: availability?.trim() || 'Available'
    };
  } catch (error) {
    console.error('Error in scrapeExampleSite:', error);
    return { title: '', price: '', availability: '' };
  } finally {
    await browser.close();
  }
}
