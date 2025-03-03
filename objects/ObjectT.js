const course = {
    courseName: "js in h",
    price : "999",
    courseInstructor : "hitesh"
}

//  course.courseInstructor -> for accessing course name. Problem : if we need to print it multiple times : each time course.courseInstructor
//   Solution : const{courseInstructor(kiski value extract krni hai )}  = course {kahan se value extract krni hai}
 // console.log(courseInstructor) // or const{courseInstructor : instructor{proxy name} } = course > console.log(instructor)
 
 // example in react :

//  const navbar = ({company}) => {


//  }

//  navbar(company = "kite")
// * Arrays are also destructured.


///// APIS (Example : menu in restraunt) 

// * fetch methods are used to call apis.
// Sometimes : api response are in form of arrays too.
              [

                {},
                {}
              ]

 // Response for a url : 	formatted in tree strucure.
	object{2}    // signifying  two objects are recieved
		
	    results[1]  // signifying one is array
	            0{12} // inside it contains 12 objects
	    info{4} // another object
             