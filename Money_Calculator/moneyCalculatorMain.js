
import { simpleInterest } from "./moneyCalculator.js"

var principal = 5000;
var years = 3;
var rate = 10;
const result = simpleInterest(principal, years, rate);
console.log("Simple Interest ",result);