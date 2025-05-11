
function parseCsvToJson(csv: string): any[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const jsonArray: any[] = [];
    
    for (let i = 1; i < lines.length; i++) {
        const obj: any = {};
        const currentline = lines[i].split(',');
    
        for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
        }
    
        jsonArray.push(obj);
    }
    
    return jsonArray;
}

function readCsv(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target?.result as string);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsText(new Blob([filePath]));
    });
}

export { parseCsvToJson };