"use client";
import { useActionState } from "react";
import { loginAction } from "../actions/login";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResisterPage() {
  const [state, formAction] = useActionState(loginAction, {
    success: false,
    error: "",
  });

  return (
    <div>
      <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
        <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
          旅行計画投稿サイト
        </h1>
      </header>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl">
          <p className="font-bold text-lime-700 text-4xl text-center">
            登録フォーム
          </p>
          <Card className="border-lime-600 font-bold mt-5">
            <CardContent>
              <form
                className="text-lime-700 text-3xl font-bold"
                action={formAction}
              >
                {state.error && (
                  <p className="text-red-600 text-lg mb-4">{state.error}</p>
                )}
                <input type="hidden" name="type" value="register" />
                <div>
                  <Label htmlFor="email" className="text-lg">
                    メールアドレス
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    className="border-lime-600"
                    required
                  />
                </div>
                <div className="mt-6">
                  <Label htmlFor="password" className="text-lg">
                    パスワード
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="border-lime-600 placeholder:text-gray-400"
                    placeholder="8文字以上で登録してください"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-6 bg-lime-800 text-lg cursor-pointer hover:bg-lime-600"
                >
                  登録
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
