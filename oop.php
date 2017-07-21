<?php



    abstract class RESTAURANTS {
        
        
        protected $status = 'inactive';
        
        
        public function __construct() {
            echo 'Utworzyłem se nową reske';
        }
        
        
        protected function powiedzCzemu() {
            echo 'Nie powiem';
        }
        
        
    }

    
    
    
    
    class RESTAURANT extends RESTAURANTS {
        
        
        private $name;
        public $type = 'FF';
        
        
        public function __construct($n, $type = False, $active = True) {
            
            parent::__construct();
            
            $this->name = $n;
            if ($type) {
                $this->type = $type;
            }
            if ($active) {
                $this->status = 'active';
            }
            
        }
        
        
        private function modifyName($newName) {
            $this->name = $newName;
        }
        
        public function noZmien($newName) {
            return $this->modifyName($newName);
        }

        public function noPowiedz() {
            return $this->powiedzCzemu();
        }

        public function sayHello() {
            echo 'Hello! Wartość dla x = 5 to ' . TOOLS::f(5) . '<br/>';
        }
        
        
    }
    
    
    
    $res1 = new RESTAURANT('KFC');
    
    $res1->noPowiedz();
    
    
//    echo $res1->type . '<br/>';
//    $res1->type = 'Sushi';
//    echo $res1->type . '<br/>';
    
    echo '<pre>';
    var_dump($res1);
    echo '</pre>';
    
    
    
    abstract class TOOLS {
        
        
        public static final function f($x) {
            return $x + 1;
        }
        
        
    }
    
  
    