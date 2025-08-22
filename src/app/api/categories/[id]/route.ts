import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = await prisma.categories.findUnique({
      where: { id: Number(params.id) },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Danh mục không tồn tại." },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { error: "Không thể lấy dữ liệu danh mục." },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  try {
    const category = await prisma.categories.update({
      where: { id: Number(params.id) },
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
    await prisma.categories.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Không thể xóa danh mục." },
      { status: 400 }
    );
  }
}
