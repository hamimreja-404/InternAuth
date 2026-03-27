<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $key = getenv('JWT_SECRET');
        $header = $request->getHeaderLine('Authorization');
        $token = null;

        // Extract the token from the "Bearer <token>" string
        if (!empty($header)) {
            if (preg_match('/Bearer\s(\S+)/', $header, $matches)) {
                $token = $matches[1];
            }
        }

        // Check if token exists and is valid
        if (is_null($token) || empty($token)) {
            $response = service('response');
            $response->setBody(json_encode(['error' => 'Access denied. No token provided.']));
            $response->setStatusCode(401);
            return $response;
        }

        try {
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
        } catch (Exception $ex) {
            $response = service('response');
            $response->setBody(json_encode(['error' => 'Access denied. Invalid token.']));
            $response->setStatusCode(401);
            return $response;
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do nothing here
    }
}