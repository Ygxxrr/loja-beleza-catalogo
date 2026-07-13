"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-950 px-4 py-16 text-white">
      <form
        action={action}
        className="w-full max-w-sm rounded-lg border border-zinc-800 bg-zinc-900 p-6"
      >
        <h1 className="mb-6 text-center text-lg font-bold uppercase tracking-[0.2em] text-pink-500">
          Admin
        </h1>

        <label htmlFor="username" className="mb-2 block text-sm text-zinc-300">
          Usuário
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoFocus
          className="mb-4 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />

        <label htmlFor="password" className="mb-2 block text-sm text-zinc-300">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mb-4 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />

        {state?.error && (
          <p className="mb-4 text-sm text-red-400">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-pink-600 py-2 font-semibold text-white transition-colors hover:bg-pink-700 disabled:opacity-60"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
