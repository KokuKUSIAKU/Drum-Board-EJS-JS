// add the list of char buttons to the html
var charList = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var htmlString = ejs.render(
        '<% array.map( function(el) { %>' +
        '<kbd class="key" data-key = <%= el.charCodeAt(0)%> > <%= el %></kbd> <%}); %>',
        { array: charList }
    );

var drumKit = ejs.render(
    '<div class="drumKit">'+
    '<div class="drumKit-wrap">'+
    '<%- htmlString %>'+
    '<div>'+
    '<div', 
    {htmlString:htmlString}
)
document.getElementById('app').innerHTML = drumKit;