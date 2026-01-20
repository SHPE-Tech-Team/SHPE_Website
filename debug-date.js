
const testStrings = [
    "Tuesdays, 7:00 PM",
    "Tuesday, 7:00 PM",
    "Oct 15, 6:00 PM",
    "Invalid Date String"
];

testStrings.forEach(str => {
    const currentYear = new Date().getFullYear();
    const try1 = str + (str.match(/\d{4}/) ? "" : `, ${currentYear}`);
    const d = new Date(try1);
    console.log(`"${str}" -> "${try1}"`);
    console.log(`  Valid? ${!isNaN(d.getTime())}`);
    console.log(`  Result: ${d.toString()}`);
});
