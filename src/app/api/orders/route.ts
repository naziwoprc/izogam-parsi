import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, area, projectType, description } = body;

    if (!name || !phone || !area || !projectType) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدهای الزامی را پر کنید" },
        { status: 400 }
      );
    }

    const [newOrder] = await db
      .insert(orders)
      .values({
        name,
        phone,
        area,
        projectType,
        description: description || null,
      })
      .returning();

    return NextResponse.json(
      { message: "سفارش با موفقیت ثبت شد", id: newOrder.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "خطا در ثبت سفارش" },
      { status: 500 }
    );
  }
}
