let characters = JSON.parse(poke_file).result
let character_input = document.getElementById("character_input")
let character_info = document.getElementById("character_info")


function find_character() {
    let input_value = character_input.value //leo el contenido dentro de mi input
    let result = find_result(input_value)

    character_info.innerHTML = `
    <p>${result.name}</p> 
    <img src="${result.ThumbnailImage}">
    <p>Type: ${result.type}</p>
    <p>Weight: ${result.weight}</p>
    <p>Height: ${result.height}</p> 
    <p>Abilities: ${result.abilities}</p>
    <p>Weakness: ${result.weakness}</p>
   `
}

function find_result(input_value) {
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].slug == input_value) {
            return characters[i]
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].name == input_value) {
            return characters[i]
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].number == input_value) {
            return characters[i]
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].ThumbnailAltText == input_value) {
            return characters[i]
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id == input_value) {
            return characters[i]
        }
    }

}






