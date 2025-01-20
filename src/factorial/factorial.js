const factotial = (number) => {
    if (number <= 1) {
      return 1;
    }
  
    return number * factotial(number - 1);
  };

  console.log(factorial(10));
  console.log(factorial(2));