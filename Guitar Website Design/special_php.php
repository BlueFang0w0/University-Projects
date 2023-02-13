<?php
    //filter options to find the employee by username 
    function database_find($collection , $category , $what){
        $manager = new MongoDB\Driver\Manager("mongodb://localhost:27017"); //Establishing link to localhost.
        $filter = [
            $category => $what,
        ];

        $query = new MongoDB\Driver\Query($filter); //Create query request.
        $container1 = $manager->executeQuery('Guitar_Shop.' . $collection, $query); //Stores result.
        $container2 = ($container1->toArray()); //Stores formatted result.

        if(count($container2) === 0){
            echo "false";
        }else{
            echo "true";
        }
    }

    function database_write($collection, $registration_data){
        $bulk = new MongoDB\Driver\BulkWrite;
        $json = json_decode($registration_data);
        $bulk->insert($json);

        $manager = new MongoDB\Driver\Manager("mongodb://localhost:27017"); //Establishing link to localhost.
        $result = $manager->executeBulkWrite('Guitar_Shop.' . $collection, $bulk);
    }

    if(isset($_POST["collection"]) && isset($_POST["category"]) && isset($_POST["what"])){ //Receive options from the java_script and call on function.
        database_find($_POST["collection"] , $_POST["category"] , $_POST["what"]);
    }else if(isset($_POST["collection"]) && isset($_POST["registration_data"])){
        database_write($_POST["collection"], $_POST["registration_data"]);
    }

    

    //cursor object stores all documents that match the specs 
    //$cursor = $manager->executeQuery('Guitar_Shop.Acoustic', $query);
    
    //converts cursor to array
    //$storage_arrray = ($cursor->toArray());
   // echo json_encode($storage_arrray);

?>