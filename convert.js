const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path')
const folderPath = './Excel';

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const filenameWithoutExtension = path.parse(filePath).name;
        // Do something with the file path
        console.log('File path:', filenameWithoutExtension);

        const excelFilePath = filePath;

        const workbook = XLSX.readFile(excelFilePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const transformedData = {};

        let currentHeader = null;
        let currentAttributes = [];

        jsonData.slice(0).forEach((row, rowIndex) => {
            if (rowIndex === 0) {
                currentHeader = row[0];
                transformedData[currentHeader] = currentAttributes;
                currentAttributes = [];
            } else {
                const attribute = {
                    //attributes are part of header, free to customize this one as this is not dynamic atm
                    Field: row[1],
                    Data_Type: row[2],
                    Nullable: row[3],
                };

                if (row[4]) {
                    attribute['business_rules'] = row[4];
                }

                currentAttributes.push(attribute);
            }
        });

        transformedData[currentHeader] = currentAttributes;

        const jsonFilePath = `./JSON/${filenameWithoutExtension}.json`;
        fs.writeFileSync(jsonFilePath, JSON.stringify(transformedData, null, 2));

        console.log('Conversion complete.');
    });
});