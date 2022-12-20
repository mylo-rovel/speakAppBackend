// const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const stringToTest = "emilio@gmail.com";
const result = stringToTest.match(regex);
