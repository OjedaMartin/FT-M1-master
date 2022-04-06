'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
 
function BinarySearchTree(v)
{
  
  this.value = v;
  this.left = null;
  this.right = null;
  this.tam = 1
}


BinarySearchTree.prototype.insert = function insert(v)
{
  
	if( v < this.data)
  {
		if(this.left === null)
    {
			this.left = new BinarySearchTree(v);
      BinarySearchTree.tam ++
		}
    else
    {
			this.left.insert(v);
		}	
	}
	if( v >= this.data)
  {
		if(this.right === null)
    {
			this.right = new BinarySearchTree(v);
      BinarySearchTree.tam ++
		}
    else
    {
			this.right.insert(v);
		}	
	}
	
}
BinarySearchTree.prototype.contains = function contains()
{
  
}
BinarySearchTree.prototype.depthFirstForEach = function depthFirstForEach()
{

}
BinarySearchTree.prototype.breadthFirstForEach = function breadthFirstForEach()
{
  
}
BinarySearchTree.prototype.size = function size()
{
  return this.tam
}








// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
