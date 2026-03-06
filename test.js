
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/w-full px-4 md:px-12/g, 'w-full md:w-1/2 px-3');

html = html.replace(/class=\"bg-white p-4 md:p-6 rounded-xl border-\\[3px\\] border-aurora-green shadow-lg card-hover h-\\[300px\\] md:h-\\[450px\\] max-w-4xl mx-auto flex items-center justify-center w-full\"/g, 'class=\"bg-white p-2 md:p-3 rounded-xl border-[3px] border-aurora-green shadow-lg card-hover h-[300px] flex items-center justify-center w-full\"');

let parts = html.split('<!-- ÇáÊÚáíÞ 6 -->');
html = parts[0];
let footerParts = parts[1].split('<!-- Pagination -->');
html += '<!-- Pagination -->' + footerParts[1];


for (let i = 1; i <= 5; i++) {
    html = html.replace(new RegExp('assets/testimonials/' + i + '.jpg', 'g'), 'assets/testimonials_new/' + i + '.jpg');
}
fs.writeFileSync('index.html', html);
console.log('done!');

