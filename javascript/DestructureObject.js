let measure =
   {
    height : 200,
    width : 100,
    title : "some title"

}


function displayComponent({width,height,title="default title"}) {
    //console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
    /*console.log(someObject.width);
    console.log(someObject.height);
    console.log(someObject.title);*/
    console.log(width);
    console.log(height);
    console.log(title);
}

displayComponent({width:20,height:100});
/*displayComponent({width:200, title:'My Awesome Component'})
displayComponent({title:'My Amazing Component'})
displayComponent({width:300, height:300, title:'My Average Component'})*/

let options = { width: 200, height: 100, title: 'My Component'}
let { title, height, ...rest} = options
console.log(title) // My Component
console.log(rest) // { width: 200, height: 100 }