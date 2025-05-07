

import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
    const lang = req.nextUrl.searchParams.get('lang');
  
    if (!lang || !['es', 'eus'].includes(lang)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }
  
    const filePath = path.join(process.cwd(), 'messages', `${lang}.json`);
  
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      const messages = JSON.parse(fileContents);
  
     
  
      return NextResponse.json(messages);
    } catch  {
     
      return NextResponse.json({ error: 'Error loading translations' }, { status: 500 });
    }
  }
  