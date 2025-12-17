import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Interviewer AI Backend is healthy',
    timestamp: new Date().toISOString()
  }, { status: 200 });
}