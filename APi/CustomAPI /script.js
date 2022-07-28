var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
}

async function generateColors(url, data){

    const response = await fetch(url,{
        headers: {
            'Content-Type': 'application/json'
        },
        body:data
    })
    const colorArr = await response.json()
    console.log(colorArr);

}

generateColors(url, data);


// [[42, 41, 48], [90, 83, 84], [191, 157, 175], [188, 138, 125], [215, 170, 66]]
// note that the input colors have changed as well, by a small amount
				
			