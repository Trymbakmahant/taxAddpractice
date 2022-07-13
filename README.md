All end point's and their meanings

1. http://localhost:5000/createtask  this is a post api 


where we have to give this all field 
  
  
    {
     
    taskname : " " ,
    
    description : " " ,
    
    period : " " ,
    
    periodtype : " " ,
    
    tasklistId  : " " 
    
    }
    
    here the duedate is automatically  created and saved in database we  use period and periodtype to calculate the duedate
    
    
2.  http://localhost:5000/createtasklist  this is a post api 
 
 where we have to give all this field 
 
    {
 
    name : " " ,
    
    description : " " ,
    
    active : " " 
    
    }
  
   3. this is a get api => http://localhost:5000/tasklist    
   
    
    
     which return's all the task which are present in mongodb 
    
   
   
   4.this is a get api => http://localhost:5000/tasklist/search
    
    here we have to give a field 
    {

    searchtext : " " 
    
    }   
 
     it search in the task list and give the search result here the result is the  tasklist and here searchtext is the name of the task which is searched by the program 
    
    
 
