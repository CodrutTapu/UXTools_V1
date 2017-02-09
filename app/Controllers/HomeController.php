<?php

    namespace App\Controllers;

    use Slim\Views\Twig as View;

    class HomeController extends Controller
    {
        public function home($request,$response)
        {
           
            if (isset($_SESSION['user']))
            {
                return $this->view->render($response,'index.twig');
            } else {
                return $response->withRedirect($this->router->pathFor('auth.signin'));
            }
        }
    }

 ?>
