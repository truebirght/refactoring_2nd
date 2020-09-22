
function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return [
        "<div>",
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}

function emitPhotoData(p){
    return [
        `<p>title: ${p.title}</p>`,
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString()}</p>`,
    ].join("\n");
}
