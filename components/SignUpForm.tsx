"use client";

import { addUser } from "@/app/_actions/addUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

export function SignUpForm({ hash }: { hash: string }) {
  const [state, formAction] = useFormState(addUser.bind(null, hash), {} as any);
  return (
    <form action={formAction} className="max-w-xl flex flex-col gap-2">
      <Input
        name="username"
        type="text"
        placeholder="HN username"
        className="border-[#99999a]"
      />
      <Input
        name="location"
        type="text"
        placeholder="City, Country"
        className="border-[#99999a]"
      />
      <Button type="submit" className="self-end bg-[#ff6602]">
        Register
      </Button>
      {state && Object.keys(state).length > 0 ? JSON.stringify(state) : null}
    </form>
  );
}
