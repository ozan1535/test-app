import NextAuth, { AuthOptions } from "next-auth";
import { authConfig } from "../../../../../auth";
export const authOptions: AuthOptions = NextAuth(authConfig);

export { authOptions as GET, authOptions as POST };
