import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.users.findUnique({
      where: { id: Number(params.id) },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        role: true,
        created_at: true,
        status: true,
      },
    });
    if (!user)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Không thể tải dữ liệu người dùng" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updateData: any = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      role: data.role,
      status: data.status,
    };

    // Nếu có password mới, mã hóa nó
    if (data.password && data.password.trim() !== "") {
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      updateData.password = hashedPassword;
    }

    const user = await prisma.users.update({
      where: { id: Number(params.id) },
      data: updateData,
    });

    // Không trả về password_hash trong response
    const { password_hash, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (err: any) {
    if (err.code === "P2002") {
      return NextResponse.json({ error: "Email đã tồn tại" }, { status: 400 });
    }
    console.error("Error updating user:", err);
    return NextResponse.json(
      { error: "Không thể cập nhật người dùng" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.users.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ message: "Đã xóa người dùng thành công" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Không thể xóa người dùng" },
      { status: 400 }
    );
  }
}
