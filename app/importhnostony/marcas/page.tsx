
import type { Metadata } from "next";
import { headers } from "next/headers";

import { getAllBrands } from "@/app/utils/actions";
import Brand from "../components/brand/brand";

export const metadata: Metadata = {
  title: "Marcas | IMPORTHNOSTONY",
  description:
    "Explora las marcas de repuestos y accesorios para máquinas textiles industriales disponibles en IMPORTHNOSTONY.",
};

export default async function MarcasPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const tenant = host.split(".")[0];

  const marcas = await getAllBrands(tenant);

  return <Brand marcas={marcas} />;
}
