"use client";

import { createApiKey } from "@/helpers/create-api-key";
import { Loader2 } from "lucide-react";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { toast } from "./ui/toast";
import { revokeApiKey } from "@/helpers/revoke-api-key";

interface ApiKeyOptionsProps {
    apiKeyValue: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyValue }) => {
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [isRevoking, setIsRevoking] = useState(false);
    const router = useRouter();

    const createNewApiKey = async () => {
        setIsCreatingNew(true);
        try {
            await revokeApiKey();
            await createApiKey();
            router.refresh();
        } catch (err) {
            toast({
                title: "Error Creating API key",
                message: "Please try again later",
                type: "error",
            });
        } finally {
            setIsCreatingNew(false);
        }
    };

    const removeCurrentApiKey = async () => {
        setIsRevoking(true);
        try {
            await revokeApiKey();
            router.refresh();
        } catch (err) {
            toast({
                title: "Error Revoking API key",
                message: "Please try again later",
                type: "error",
            });
        } finally {
            setIsRevoking(false);
        }
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
                <Button variant="ghost" className="flex gap-2 items-center">
                    <p>
                        {isCreatingNew
                            ? "Creating new key"
                            : isRevoking
                            ? "Revoking Key"
                            : "Options"}
                    </p>
                    {isCreatingNew || isRevoking ? (
                        <Loader2 className="animate-spin h-4 w-4" />
                    ) : null}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => {
                        navigator.clipboard.writeText(apiKeyValue);
                        toast({
                            title: "Copied",
                            message: "API key Copied",
                            type: "success",
                        });
                    }}
                >
                    Copy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={createNewApiKey}>
                    Create New Key
                </DropdownMenuItem>
                <DropdownMenuItem onClick={removeCurrentApiKey}>
                    Revoke Key
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ApiKeyOptions;
