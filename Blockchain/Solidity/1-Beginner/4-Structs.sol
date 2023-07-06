// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Structs {

    // example of a struct
    // struct is basically a container
    struct Car{
        string model;
        uint year;
        address owner;
    }

    //! ==================> ways to use the Struct

    // use the struct as a state variable, car.
    Car public car;

    // call an array of the struct Car
    // because the owner can have multiple cars
    Car[] public cars;

    // define amapping from the owner to Car
    mapping (address => Car[]) public carsByOwner;

    

    function examples() external {
        // "memory" allows the variable to live temporarily in the function

        //! ================> initialise a struct in three ways...
        // - 1) pass in the struct values
        //! The order of the struct variables matters
        Car memory toyota = Car("Ford", 2018, msg.sender);

        // - 2) initialize as key values pairs
        //! the struct variable order doesnt matter
        Car memory bmw = Car({year:2018, model:"BMW", owner:msg.sender});

        // - 3) Define the default
        Car memory tesla;
        // defines the struct in its default values
        // becomes: Car({year:0, model:"", owner:0x0});
        // we can add values to the tesla struct as so;
        tesla.model = "Tesla";
        tesla.year = 2010;
        tesla.owner = msg.sender;

        //! ================> push this struct into the cars array
        cars.push(toyota);
        cars.push(bmw);
        cars.push(tesla);

        // we dont have to initialize our struct into memory, then save it the cars array... we can do that in a single line.
        cars.push(Car("Range", 2018, msg.sender));

        //! ================> to access the first car struct in the array... 
        Car memory firstCar = cars[0];
        // ... and do something with it
        firstCar.owner;
        firstCar.model;


        //! ================> Update the year of a particular struct in the array
        Car storage secondCar = cars[1];
        // updates the year and stores it on the blockchain.
        secondCar.year = 2018;

         //! ================> Delete - resets to default value
        //  reset the secondCar.year to zero;
        delete secondCar.year;

         // resets the first car struct in the array to default values
         delete cars[0];

      

    }


}