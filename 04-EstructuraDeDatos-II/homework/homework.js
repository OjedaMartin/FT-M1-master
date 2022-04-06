'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList()
{
  this._length = 0;
  this.head = null;
}
LinkedList.prototype.add = function (value)
{
  var node = new Node(value);
  let current = this.head;
  
  if (!current) {
      this.head = node;
      this._length++;
      return node;
  }
  while (current.next) {
    current = current.next;
  }
  node.previous= current
  current.next = node;
  this._length++;
  return node;

}

LinkedList.prototype.remove = function()
{
  let current = this.head;
  if (!current) return null
  if (!current.next) 
  { const value = current.value
    this.head = null
    return value
  }

  while (current.next.next)
  {
    current = current.next;
  }
    let value = current.next.value
    current.next= null
    return value
}

LinkedList.prototype.search = function search(cosa)
{
  if(!this.head) return null

  if (typeof cosa === "function")
  {      
    if (cosa (this.head.value)) return this.head.value 
  }
  else
  {
    if (this.head.value === cosa) return this.head.value 
  }
  let current = this.head
  while (current.next)
  {
    current = current.next
    if(typeof (cosa) === "function") 
    {
      if(cosa(current.value)) return current.value
    }
    else
    {
      if(current.value === cosa) return current.value
    }
  }
  return null
}





function Node(value)
{
    this.value = value;
    this.next = null;
    this.previous = null
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
this.numBuckets = 35
this.data = new Array(this.numBuckets)
}

HashTable.prototype.set = function set (key, value)
{
  if (typeof key !== "string") throw new TypeError ("Keys must be strings") ;
  const bucket = this.hash(key)
  if (!this.data [bucket]) this.data [bucket]= {}
  this.data [bucket][key] = value
}
HashTable.prototype.get = function get (key) 
{
  const bucket = this.hash(key)
  if (this.data [bucket]) return this.data [bucket][key]
  return undefined
}
HashTable.prototype.hasKey = function hasKey (key)
{
  const bucket = this.hash(key)
  if (this.data [bucket]) return this.data [bucket].hasOwnProperty(key)
  return false 
}
HashTable.prototype.hash = function hash (key)
{
  let code = 0 
  for (let i = 0; i < key.length; i++) {
    code += key.charCodeAt(i)
    
  }
  return code % this.numBuckets
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
