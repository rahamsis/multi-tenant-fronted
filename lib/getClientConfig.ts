// interface TenantConfig {
//   name: string;
//   folder: string; // Nombre de la carpeta en /app
// }

// export function getClientConfig(host?: string): TenantConfig | null {
//   if (!host) return null;

//   // Normalizamos el host por si viene con puerto
//   const cleanHost = host.split(":")[0];

//   switch (cleanHost) {
//     case "importonyperu.local":
//       return { name: "importonyperu", folder: "importonyperu" };
//     case "depsac.local":
//       return { name: "depsac", folder: "depsac" };
//     case "anita.local":
//       return { name: "anita", folder: "anita" };
//     case "lezcor.local":
//       return { name: "anita", folder: "anita" }; // o crea uno para lezcor
//     default:
//       return null;
//   }
// }