# Excel2JSON

This repository contains a Node.js script that converts Excel files from the "Excel" folder into JSON format and saves the JSON output in the "JSON" folder.

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone this repository to your local machine or download the ZIP file.

2. Install the required dependencies by running the following command in your terminal:

   ```bash
   npm install
   ```

3. Place your Excel files inside the "Excel" folder.

4. Modify the script to suit your Excel structure and desired JSON output. Open `convert.js` and make necessary adjustments.

5. Run the conversion script by executing the following command in your terminal:

   ```bash
   node convert.js
   ```

6. After running the script, you will find the generated JSON output files in the "JSON" folder.

## Configuration

- The script uses the `xlsx` library to read Excel files and the `fs` (file system) module to write JSON files.

- Modify the `excelFolderPath` variable in `convert.js` to specify the path to the "Excel" folder.

- Adjust the script in `convert.js` to match the structure and data of your Excel files.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
