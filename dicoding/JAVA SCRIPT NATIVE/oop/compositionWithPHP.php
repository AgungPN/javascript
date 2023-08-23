<?php
/* Sumber:
https://www.koderhq.com/tutorial/php/oop-composition/#:~:text=Composition is a relationship between,a fragile hierarchy of classes.
*/

class Animal {
  public function eat() {
    echo "this animal can eat" . PHP_EOL;
  }
}

class Flying {
  public function fly() {
    echo "this animal can fly" . PHP_EOL;
  }
}

// composition
class Walking {
  public function walk() {
    echo "this animal can walk" . PHP_EOL;
  }
}

class Swiming {
  public function swim() {
    echo "this animal can swiming" . PHP_EOL;
  }
}

class Dog extends Animal {
  public $walk;
  public function __construct() {
    $this->walk = new Walking();
  }
}

class Cat extends Animal {
  public $walk;
  public function __construct() {
    $this->walk = new Walking();
  }
}
class Fish extends Animal {
  public $swim;
  public function __construct() {
    $this->swim = new Swiming();
  }
}

class Duck extends Animal {
  public $swim, $walk, $fly;
  public function __construct() {
    $this->swim = new Swiming();
    $this->walk = new Walking();
    $this->fly = new Flying();
  }
  public function walk() {
    echo "walk";
  }
}


$dog = new Dog();
$cat = new Cat();
echo "Dog: " . PHP_EOL;
$dog->eat();
$dog->walk->walk();

echo "Cat: " . PHP_EOL;
$cat->eat();
$cat->walk->walk();


echo "Fish: " . PHP_EOL;
$fish = new Fish();
$fish->eat();
$fish->swim->swim();


echo "Fish: " . PHP_EOL;
$duck = new Duck();
$duck->eat();
$duck->walk->walk();
$duck->walk();
