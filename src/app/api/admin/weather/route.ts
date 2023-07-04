import {NextResponse} from 'next/server';
import {getWeatherCurrent, getWeatherForecast} from '../../../../services/api/weather';

export async function GET() {
  try {
    const weatherCurrent = await getWeatherCurrent();

    const weatherForecast = await getWeatherForecast();

    return NextResponse.json({weatherCurrent, weatherForecast}, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
