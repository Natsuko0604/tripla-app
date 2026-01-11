"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const LoginSchema = z.object({
  email: z.email("無効なメールアドレス形式です"),
  password: z.string().min(8, "パスワードは8文字以上で入力してください"),
});

export async function loginAction(
  prevState: { success: boolean; error: string },
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0].message,
    };
  }

  const { email, password } = parsed.data;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok || data?.success === false) {
      return {
        success: false,
        error:
          data?.error ?? "メールアドレスまたはパスワードが正しくありません",
      };
    }

    // 🟢 成功 → マイページへ
    redirect("/mypage");
  } catch {
    return {
      success: false,
      error: "ログイン中にエラーが発生しました",
    };
  }
}
