"use server";

import { signIn } from "@/auth";
import { z } from "zod";
import { redirect } from "next/navigation";

const LoginSchema = z.object({
  email: z.string().email("無効なメールアドレス形式です"),
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
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: "メールアドレスまたはパスワードが正しくありません",
      };
    }

    redirect("/mypage");
  } catch (e) {
    return {
      success: false,
      error: "ログイン中にエラーが発生しました",
    };
  }
}
