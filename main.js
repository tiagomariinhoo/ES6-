class TodoList {
    constructor() {
        this.todos = [];
    }

    //Quando define statico, não enxerga o restante da classe
    //Então ele não vai enxergar o "this.todos" que tá fora do método
    //Serve para retornar algo independente do restante da classe
    static addTodo() {
        this.todos.push("Eae");
        // console.log(this.todos);
    }
}

class Matematica {
    static soma(a, b){
        return (a + b);
    }
}

//Usa sempre esse document e usa o id colocado no botão
document.getElementById('novotodo').onclick = function () {
    console.log(Matematica.soma(1, 2));
}

//PARTE 1

// class List {
//     constructor(){
//         this.data = [];
//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// // class TodoList {
// //     constructor() { //Primeiro metodo executado quando instancia
// //         this.todos = [];
// //     }

// //     addTodo() {
// //         this.todos.push('Novo todo');
// //         console.log(this.todos);
// //     }
// // }


// //Extends, conceito de herança
// class TodoList extends List{
//     constructor() {
//         super(); //Chama o metodo constructor da classe pai

//         this.usuario = 'Tiago';
//     }


//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList(); //INstancia da classe

// //Document representa o documento HTML que será mostrado na janela
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add("Novo Todo");
// }

// // document.getElementById('novotodo').onclick = function () {
// //     MinhaLista.mostraUsuario();
// // }

// MinhaLista.mostraUsuario();