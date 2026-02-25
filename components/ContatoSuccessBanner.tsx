"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContatoSuccessBanner() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(searchParams.get("enviado") === "1");
  }, [searchParams]);

  if (!show) return null;

  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
      <p className="font-medium">Mensagem enviada com sucesso!</p>
      <p className="text-sm mt-1">Responderemos o mais rápido possível.</p>
    </div>
  );
}
