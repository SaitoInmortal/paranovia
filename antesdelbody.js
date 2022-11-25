Window.onload = function(){
    //crea una serie de elementos por cada tag encontrados
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("quieres ser mi novia?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados)
};