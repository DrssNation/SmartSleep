import {currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function checkUser() {
    const user = await currentUser();

    //check if user exists
    if (!user) {
        return null;
    }

    const dbUser = await db.user.findUnique({
        where: {
            clerkId: user.id,
        },
    });

    if (dbUser)  {
        return dbUser;
    }
    
    //create new user if not found
    const newUser = await db.user.create({
        data: {
            clerkId: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            name: `${user.firstName} ${user.lastName}`,

        },
    });

    return newUser;


}
