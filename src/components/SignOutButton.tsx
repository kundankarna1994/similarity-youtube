"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import Button from "@/ui/Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsLoading(true);

        try {
            await signOut();
        } catch (err) {
            // toast({
            //     title: "Error Signing Out",
            //     message: "Please try again later.",
            //     type: "error",
            // });
        }
        setIsLoading(false);
    };
    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign Out
        </Button>
    );
};

export default SignOutButton;
