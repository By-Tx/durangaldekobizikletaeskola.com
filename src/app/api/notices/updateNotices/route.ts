import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug") as string;
    const locale = formData.get("locale") as "es" | "eus";
    const title = formData.get("title")?.toString().trim();
    const subtitle = formData.get("subtitle")?.toString().trim();

    if (!slug || !locale) {
      return NextResponse.json({ error: "slug and locale are required" }, { status: 400 });
    }

    const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`);
    const noticesPath = path.join(process.cwd(), 'public', 'notices.json');

    const [rawMessages, rawNotices] = await Promise.all([
      fs.readFile(messagesPath, 'utf-8'),
      fs.readFile(noticesPath, 'utf-8'),
    ]);

    const messagesJson = JSON.parse(rawMessages);
    const noticesJson = JSON.parse(rawNotices);
    const notice = noticesJson.find((n: any) => n.slug === slug);

    if (!notice || !notice.altKey) {
      return NextResponse.json({ error: "Notice or altKey not found" }, { status: 404 });
    }

    //  Update noticeComponent if title/subtitle exist and are not empty
    const keyNum = notice.altKey.match(/\d+/)?.[0];

    if (!keyNum) {
      return NextResponse.json({ error: "Unable to extract number from altKey" }, { status: 400 });
    }

    const comp = messagesJson.noticeComponent || {};

    if (title && title.length > 0) comp[`noticeTitle${keyNum}`] = title;
    if (subtitle && subtitle.length > 0) comp[`altImage${keyNum}`] = subtitle;

    messagesJson.noticeComponent = comp;

    //  Update `${slug}Page` block without overwriting with empty fields
    const translationKey = `${slug}Page`;
    const existingEntry = messagesJson[translationKey] || {};
    const updatedEntry: Record<string, string> = { ...existingEntry };

    if (title && title.length > 0) updatedEntry.title = title;
    if (subtitle && subtitle.length > 0) updatedEntry.subTitle = subtitle;

    const pFields = ["p1", "p2", "p3", "p4", "p5", "p6"];
    pFields.forEach((p) => {
      const value = formData.get(p);
      const trimmed = value?.toString().trim();
      if (trimmed && trimmed.length > 0) {
        updatedEntry[p] = trimmed;
      }
    });

    messagesJson[translationKey] = updatedEntry;

    await fs.writeFile(messagesPath, JSON.stringify(messagesJson, null, 2), 'utf-8');

    return NextResponse.json({
      message: `Update successful`,
      updatedKeys: {
        component: keyNum,
        translation: translationKey,
      },
      updatedComponent: comp,
      updatedTranslation: updatedEntry,
    });

  } catch (error) {
    console.error("Error in updateNotices:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
