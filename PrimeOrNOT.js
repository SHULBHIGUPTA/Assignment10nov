//Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not

function test_prime(x)
{

  if (x===1)
  {
    return false;
  }
  else if(x === 2)
  {
    return true;
  }else
  {
    for(var n = 2; n < x; n++)
    {
      if(x % n === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

