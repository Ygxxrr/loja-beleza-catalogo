"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/auth/session";

export type LoginState = { error?: string } | undefined;

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = formData.get("username");
  const password = formData.get("password");
  const expectedUsername = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!expectedUsername || !passwordHash) {
    throw new Error("Missing ADMIN_USERNAME or ADMIN_PASSWORD_HASH environment variable");
  }

  if (typeof username !== "string" || !username || typeof password !== "string" || !password) {
    return { error: "Informe usuário e senha." };
  }

  const isValid = await bcrypt.compare(password, passwordHash);
  if (username !== expectedUsername || !isValid) {
    return { error: "Usuário ou senha incorretos." };
  }

  await createSession();
  redirect("/admin");
}
