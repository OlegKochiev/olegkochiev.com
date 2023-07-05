import {NextRequest, NextResponse} from 'next/server';
import {getCoin, getCurrency} from '../../../../services/api/currency';

export async function GET() {
  try {
    const currency = await getCurrency();
    const coin = await getCoin();
    return NextResponse.json({currency, coin}, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
