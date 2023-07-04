import {NextRequest, NextResponse} from 'next/server';
import {getWeatherCurrent, getWeatherForecast} from '../../../../services/api/weather';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    //@ts-ignore
    const {params} = res;
    const days = params?.days ?? 5;
    const city = params?.city ?? 'Владикавказ';
    const weatherCurrent = await getWeatherCurrent(city);
    const weatherForecast = await getWeatherForecast(city, days);
    return NextResponse.json({current: weatherCurrent, forecast: weatherForecast}, {status: 200});
  } catch (error) {
    return NextResponse.json(error, {status: 500});
  }
}
