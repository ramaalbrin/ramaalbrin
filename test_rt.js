const http = require('http');
const html = `
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.jsdelivr.net/npm/@contentful/rich-text-html-renderer@latest/dist/rich-text-html-renderer.browser.min.js"></script>
</head>
<body>
<script>
    if (typeof contentfulRichTextHtmlRenderer !== 'undefined') console.log('Found contentfulRichTextHtmlRenderer');
    else if (typeof richTextHtmlRenderer !== 'undefined') console.log('Found richTextHtmlRenderer');
    else console.log(Object.keys(window).filter(k => k.toLowerCase().includes('richtext') || k.toLowerCase().includes('html')));
</script>
</body>
</html>
`;
