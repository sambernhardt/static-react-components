var snippets = document.querySelectorAll(".snippet");

snippets.forEach(snippet => {
    var parent = snippet.parentNode;
    var src = parent.querySelector(".src");
    var dist = parent.querySelector(".dist");

    src.innerHTML = escapeHtml(snippet.innerHTML)
        .replace(/^\n /, " ")
        .replace(/ {12}/g, "")
        .replace(/ +$/, "");
    
    setTimeout(() => {
        dist.innerHTML = escapeHtml(process(snippet.innerHTML))
            .replace(/^\n&/, "&")
            .replace(/ {12}/g, "")
            .replace(/ +$/, "");
        Prism.highlightAll();
    }, 500)
})

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

 function process(str) {

    var div = document.createElement('div');
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}