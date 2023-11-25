// Affichage console en 3 variables
const string1 = "Hello";
const string2 = "Jesse";
const stringTotal = string1 + " " + string2
console.log(stringTotal)



// Simlification en 2 variables
const stringOne = "Hello";
const stringTwo = "Jesse";
console.log(stringOne + " " + stringTwo);



// Booléen - Return true
const chiffre1 = 5;
const Boolean = (chiffre1>=5);
console.log(Boolean)



// Boucle IF avec ELSE IF et ELSE
const speed = 101
if (speed<70) 
{
    console.log("Tu roules à la bonne vitesse");
} 
else if (speed<100) 
{
    console.log("FREINE ENCULEEEEEEE");
}
else 
{
    console.log("Ca sent le sapin");
}



// SWITCH
console.log("fonctionnement du switch");
const favColor = "blue";
switch(favColor) 
{
    case "blue":
        console.log("Le bleu est c'est trop beau");
        break;
    case "red":
        console.log("J'aimerais bien une voiture rouge");
        break;
    default:
        console.log("Je ne connais pas ta couleur")
}



// LOOPS (WHILE)
console.log("Les While");
let numberLoop = 0;
while (numberLoop<3)
{
    console.log(numberLoop)
    numberLoop++;
}



// LOOPS (DO WHILE)
//  Le Do fait un premier "passage grauit".
//  Il affiche le console.log puis incrémente de 1.
//  On rentre ensuite dans la boucle while qui vérifie la condition.
// Si la condition n'est pas remplie on remonte dans le Do tant que la condition reste ok.
console.log("Les Do While");

let numberDo = 0;
do{
        console.log(numberDo);
        numberDo++;
}
while(numberDo<3)



// LOOPS (FOR)
// La partie 1 est l'initialisation de la boucle :
//  C'est l'état de la variable (ici 0)
// La partie 2 test la condition : c'est <5 DONC :
//  On fait le console.log (et non pas après la partie 3)
// Si la partie 2 est ok, on fait la partie 3 et on recommence
// Cela explique pourquoi on s'arrête à 4.
console.log("Les Loops For");
for (let numberFor=0; numberFor<5; numberFor++)
{
    console.log(numberFor);
}



// Les FONCTIONS
console.log("Les Fonctions");
function multiply(number1, number2)
{
    return number1*number2;
}
const a = 5;
const b = 6;
const multiplyNumbers = multiply(a,b);
console.log(multiplyNumbers);



// Les TABLEAUX (ARRAY)
console.log("Les Tableaux ARRAY");
const fruits = ["Pomme", "Fraise", "Citron", "Banane", "Orange"];
console.log("On affiche le nombre d'éléments du tableau :")
console.log(fruits.length);
console.log("On affiche le premier objet du tableau via son index :")
console.log(fruits[0]);
console.log("On affiche tous les éléments du tableau");
console.log(fruits);
console.log("On affiche tous les fruits via une boucle FOR :")
for (let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}
console.log("On ajoute un fruit à la fin via Push :");
fruits.push("Kiwi");
console.log(fruits)
console.log("On supprime un fruit à la fin via pop :");
fruits.pop();
console.log(fruits);
console.log("On garde les agrumes avec le slice :");
console.log("Le dernier argument du slice est le dernier index non inclus (ici 2,4)")
const agrumes = fruits.slice(2,4)
console.log(agrumes)



// Les OBJETS
const dog =
{
    name: "Choupette",
    color: "white",
    age: 4
}
console.log("Afficher les propriétés d'un objet :")
console.log(dog.age);
console.log(dog["age"]);



// Les FONCTIONS CONSTRUCTEURS
console.log("Les FONCTIONS CONSTRUCTEURS");
function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
}
console.log("Avec la fct new, on va créer un chien qui vient de l'usine a chiens du constructeur :");
const petitCaniche = new Dog("Akira", "Roux", "13");
console.log(petitCaniche);
