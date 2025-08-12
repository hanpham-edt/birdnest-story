import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  try {
    const category = await prisma.categories.update({
      where: { id: params.id },
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description || "",
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      { error: "Không thể cập nhật danh mục." },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.categories.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Không thể xóa danh mục." },
      { status: 400 }
    );
  }
}
