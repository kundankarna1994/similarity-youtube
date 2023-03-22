"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { toast } from "@/ui/toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signInWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await signIn("credentials", { redirect: false });
        } catch (err) {
            toast({
                title: "Error Signing In",
                message: "Please try again later.",
                type: "error",
            });
        }
        setIsLoading(false);
    };
    return (
        <Button size="sm" onClick={signInWithGoogle} isLoading={isLoading}>
            Sign In
        </Button>
    );
};

export default SignInButton;
