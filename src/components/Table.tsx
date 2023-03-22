"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import {
    DataGrid,
    GridColumnHeaderParams,
    type GridColDef,
} from "@mui/x-data-grid";
import { ApiRequest } from "@prisma/client";
import { useTheme } from "next-themes";
import { FC } from "react";
import {
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
const columnsDraft: GridColDef[] = [
    {
        field: "col1",
        headerName: "API Key Used",
        width: 400,
        renderHeader(params) {
            return (
                <strong className="font-semibold">
                    {params.colDef.headerName}
                </strong>
            );
        },
    },

    {
        field: "col2",
        headerName: "Path",
        width: 250,
    },
    {
        field: "col3",
        headerName: "Duration",
        width: 250,
    },
    {
        field: "col4",
        headerName: "Duration",
        width: 250,
    },
    {
        field: "col5",
        headerName: "Status",
        width: 250,
    },
];

const columns = columnsDraft.map((col) => {
    if (col.field === "col1") {
        return col;
    }
    return {
        ...col,
        renderHeader(params: GridColumnHeaderParams<any, any, any>) {
            return (
                <strong className="font-semibold">
                    {params.colDef.headerName}
                </strong>
            );
        },
    };
});
type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
    timestamp: string;
};

interface TableProps {
    userRequests: ModifiedRequestType<"timestamp">[];
}

const Table: FC<TableProps> = ({ userRequests }) => {
    const { theme: applicationTheme } = useTheme();

    const theme = createTheme({
        palette: {
            mode: applicationTheme === "light" ? "light" : "dark",
        },
    });

    const rows = userRequests.map((req) => ({
        id: req.id,
        col1: req.usedApiKey,
        col2: req.path,
        col3: `${req.timestamp}`,
        col4: `${req.duration}`,
        col5: req.status,
    }));
    return (
        <ThemeProvider theme={theme}>
            <DataGrid
                style={{
                    backgroundColor:
                        applicationTheme === "light" ? "white" : "#152238",
                    fontSize: "1rem",
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                autoHeight
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                columns={columns}
                rows={rows}
            />
        </ThemeProvider>
    );
};

Table.displayName = "Table";

export default Table;
