import React, { Component } from 'react-dom';
import {programmingList, helloSvelteHandler, bookDetails} from "./utility.js";
import {render } from 'react-dom';

class App extends  Component(){
    render(){

        console.log(programmingList);
        console.log(helloSvelteHandler);
        console.log(bookDetails)
        return{

        }
    }
}


class User{

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo(){
        return {name: this.name, email: this.email}
    }

    enrollCourse(name){
        this.courseList.push(name)
    }

    getCourseList(){
        return this.courseList;
    }

}

let felix = User("felix", "felix@aol.com");