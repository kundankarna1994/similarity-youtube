"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";
import SimpleBar from "simplebar-react";
const DocumentationTabs = () => {
    return (
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
            <TabsList>
                <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="nodejs">
                <SimpleBar>
                    <Code
                        code={nodejs}
                        show={true}
                        animated={true}
                        language={"javascript"}
                    />
                </SimpleBar>
            </TabsContent>
            <TabsContent value="python">
                <SimpleBar>
                    <Code
                        code={python}
                        show={true}
                        animated={true}
                        language={"python"}
                    />
                </SimpleBar>
            </TabsContent>
        </Tabs>
    );
};

export default DocumentationTabs;
