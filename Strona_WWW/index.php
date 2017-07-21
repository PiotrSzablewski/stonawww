<?php


    define('KEY_CHECK', 162343645);

    
    error_reporting(0);
    
    session_start();
    
    
    
    if (isset($_GET['wyloguj']) && $_GET['wyloguj'] === 'tak') {
        unset($_SESSION['user']);
        header("HTTP/1.1 301 Moved Permanently"); 
        header("Location: index.php");
    }
    
    
    
    if (isset($_SESSION['user'])) { // CZY ZALOGOWANO
        
        include_once 'index.html';
        
    }
    
    
    else {
        
        if (isset($_POST['login'])) {
            
            if ($_POST['login'] === 'Admin') {
                
                if ($_POST['password'] === 'haslo123') {
                    $_SESSION['user']['id'] = 1;
                    header("HTTP/1.1 301 Moved Permanently"); 
                    header("Location: index.php"); 
                }
                
                else {
                    echo 'złe hasło<br/>';
                    include './loginForm.php';
                }
                
            }
            
            else {
                echo 'nie ma cię w bazie<br/>';
                include './loginForm.php';
            }
            
        }
        
        else {
            
            echo 'nie doszło<br/>';
            include './loginForm.php';
            
        }
        
        
    }
    
    
    
    
    
    
    
    
