import React from "react";
import { CSVLink } from "react-csv";

const ExportData = ({ data, sheetName }) => {
    return (
        <div>
            <h1>Export Data</h1>
            <CSVLink
                data={data}
                filename={`table-data-${sheetName}.csv`}
                className="btn btn-primary"
                target="_blank"
            >
                Export to CSV
            </CSVLink>
        </div>
    );
};

export default ExportData;
