"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

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
  const formType = formData.get("type");

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0].message,
    };
  }

  const { email, password } = parsed.data;

  try {
    // 新規作成ページのみユーザー作成を行う
    if (formType == "register") {
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
    }

    // 共通処理
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: "メールアドレスまたはパスワードが正しくありません",
      };
    }
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: "ログイン中にエラーが発生しました",
    };
  }
  redirect("/");
}
