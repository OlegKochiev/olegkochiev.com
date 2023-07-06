import {NextRequest, NextResponse} from 'next/server';
import {getQuotes} from '../../../../services/api/quotes';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const category = 'happiness';
    const quotes = await getQuotes(category);
    return NextResponse.json(quotes, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
