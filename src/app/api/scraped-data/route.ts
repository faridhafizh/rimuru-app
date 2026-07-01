import { NextResponse } from 'next/server';
import { cache } from '@/lib/cache';

export async function GET() {
  const data = cache.get('scrapedData');
  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'No scraped data available' }, { status: 404 });
  }
}
