import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import { Metadata } from "next";
import { FC } from "react";
import DocumentationTabs from "@/components/DocumentationTabs";
import "simplebar-react/dist/simplebar.min.css";

interface pageProps {}

export const metadata: Metadata = {
    title: "Similarity API | Documentation",
    description: "Free & Open-source text similarity API",
};

const page: FC<pageProps> = ({}) => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>
                <DocumentationTabs />
            </div>
        </div>
    );
};

export default page;
