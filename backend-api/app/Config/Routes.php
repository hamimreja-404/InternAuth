<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('api/register', 'AuthController::register');
$routes->post('api/login', 'AuthController::login');

// Protected routes
$routes->group('api', ['filter' => 'auth'], function($routes) {
    $routes->get('users', 'DataController::getUsers');
    $routes->get('teachers', 'DataController::getTeachers');
});

