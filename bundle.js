"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  } //Quando define statico, não enxerga o restante da classe
  //Então ele não vai enxergar o "this.todos" que tá fora do método
  //Serve para retornar algo independente do restante da classe


  _createClass(TodoList, null, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push("Eae"); // console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}(); //Usa sempre esse document e usa o id colocado no botão


document.getElementById('novotodo').onclick = function () {
  console.log(Matematica.soma(1, 2));
}; //PARTE 1
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
