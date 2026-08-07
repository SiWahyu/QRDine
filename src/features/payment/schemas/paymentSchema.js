import { z } from "zod";

export const paymentSchema = z.object({
  fullName: z.string().trim().min(3, "Nama lengkap minimal 3 karakter"),

  email: z.string().email("Email tidak valid"),

  phone: z.string().regex(/^08\d{8,13}$/, "Nomor HP tidak valid"),

  paymentMethod: z.enum(["online", "cash"], {
    required_error: "Pilih metode pembayaran terlebih dahulu",
  }),
});
