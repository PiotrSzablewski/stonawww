<?php

abstract class VEHICLES{
    
    protected $status = 'not registered';
    public function __construct() {
        $maxSpeed = 0;
        $type = FALSE;
        $propution = NULL;
    }
    
}

class VEHICLE extends VEHICLES{
    
    protected $noWheels = NULL;
    public function __construct($type, $maxSpeed, $propultion) {
        parent::__construct();
        
        
        if($type){
            $this->type = $type;
        }
        if($maxSpeed){
           $this->maxSpeed = $maxSpeed;
           
        }
        if($propultion){
            $this->propultion = $propultion;
        }
        
    }
}

class HACKNEY extends VEHICLES{
    protected $animalToMove = '';
    
}