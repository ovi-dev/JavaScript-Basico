const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

for(let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i] )
}

// forEach solo recorre el arreglo o intera en el 
tecnologias.forEach(function(tech) {
    console.log(tech)
})

// map recore y agrega un nuevo elemento en el arrego ejp:
const arrayMap = tecnologias.map(function(tech) {
    return tech
})


// aqui esta sin la modificacion...... o con el arreglo nuevo 
// tecnologias.map(function(tech) {
//     console.log(object)



// for ... of
for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayMap)