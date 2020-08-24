const mongoose = require('mongoose');

//Not working 
// mongoose.connect('mongodb://localhost/playground');
//     .then(()=>console.log('successfully connected to mongodb'));
//     .catch(err=>console.error('Could not connect to mongodb',err));


//Alternate Approach, using callback instead of promise
mongoose.connect('mongodb://localhost/playground', function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

// const courseSchema = mongoose.Schema({
//     name: String,
//     author: String,
//     tags:[String],
//     Date:{type:Date, default:Date.now},
//     isPublished:Boolean 
// });

// const Course = mongoose.model('course',courseSchema);

// async function createCourse(){
// const course = new Course({
//     name:'Node.js Course',
//     author:'Mosh',
//     tags:['node','backend'],
//     isPublished:true
// });

// const result = await course.save();
// console.log(result);

// }

// createCourse();

// async function getCourses(){
//     const courses = await Course
//       .find({author:'Mosh'})
//       .limit(10)
//       .sort({name:1})
//       .select({name:1});
//       console.log(courses);
// }

// getCourses();

async function updateCourse(id){
    const course = Course.findById(id);
    if(!course) return;
    course.set({
        name:'Angular'
    });

    const result = await Course.save();
    console.log(result);
}

updateCourse('5f42681eb21d8f0d6cd97216');