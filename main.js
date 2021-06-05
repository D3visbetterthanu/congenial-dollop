name_of_the_student_array=[];
function submit(){
var display=[]; 
for(var e=1; e<=4; e++){
    var name_of_student=document.getElementById("name_of_the_student_"+e).value;
    console.log(name_of_student);
    name_of_the_student_array.push(name_of_student);
}
console.log(name_of_the_student_array);
 var length_of_array= name_of_the_student_array.length;
 console.log(length_of_array);
 for (var k=0; k<length_of_array; k++){
     display.push("<h4> name-"+name_of_the_student_array[k]+"</h4>");
     console.log(display);
 }
console.log(display);
document.getElementById("display_name_with_commas").innerHTML=display;
var remove_commas=display.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_sort=[];
    var length_of_array= name_of_the_student_array.length;
    console.log(length_of_array);
 for (var k=0; k<length_of_array; k++){
     display_sort.push("<h4> name-"+name_of_the_student_array[k]+"</h4>");
     console.log(display_sort);
 }
 var remove_commas=display_sort.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

