import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدهای الزامی را پر کنید" },
        { status: 400 }
      );
    }

    const [newContact] = await db
      .insert(contacts)
      .values({
        name,
        phone,
        email: email || null,
        message,
      })
      .returning();

    return NextResponse.json(
      { message: "پیام با موفقیت ارسال شد", id: newContact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "خطا در ارسال پیام" },
      { status: 500 }
    );
  }
}
