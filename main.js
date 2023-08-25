  
  
  //let number=parseInt(prompt("enter the num "));
  
  let  n1=0,n2=1,next;
  
  for( i=0; i<8; i++)
  {
	  console.log (n1);
	  
	  next=n1+n2;
	  
	  n1=n2;
	  
	  n2=next;
  }