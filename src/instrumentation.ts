export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const cron = await import('node-cron');
    const { scrapeExampleSite } = await import('./lib/scraper');
    const { cache } = await import('./lib/cache');

    // Run scraping immediately on boot
    try {
      const data = await scrapeExampleSite();
      cache.set('scrapedData', data);
      console.log('✅ Scraped data updated on boot');
    } catch (err) {
      console.error('❌ Scraper error on boot:', err);
    }

    // Schedule to run at the start of every hour
    cron.schedule('0 * * * *', async () => {
      try {
        const data = await scrapeExampleSite();
        cache.set('scrapedData', data);
        console.log('✅ Scraped data updated');
      } catch (err) {
        console.error('❌ Scraper error:', err);
      }
    });
  }
}
