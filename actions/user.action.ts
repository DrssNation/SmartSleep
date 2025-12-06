"use server";

import { auth, currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
export async function syncUser() {
  // Implementation to sync user data with the database

  try {
    const {userId} = await auth();
    const user = await currentUser();

    if (!user || !userId) return;


    const existingUser = await prisma.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (existingUser) return existingUser;


    const dbUser = await prisma.user.create({
      data: {
        clerkUserId: userId,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.fullName || '',
        imageUrl: user.imageUrl || '',

      },
    });

    return dbUser;

} catch (error) {    console.error("Error syncing user:", error);
  }

}