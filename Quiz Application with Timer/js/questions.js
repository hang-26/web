let question_Storage = [
  {
  numb: 1,
  question: "My thoughts can … my mood, too. ",
  answer: " affect",
  options: [
    "A.  affect",
    "B.  effectt",
    "C. effected",
    "D. has gone"
  ]
},




  {
  numb: 2,
  question: "Let the flowers ……………………….",
  answer: "  not be plucked",
  options: [
    "not plucked",
    "not be plucked",
    " not be plucking",
    "not been plucked"
  ]
},
  {
  numb: 3,
  question: "When you phoned I …………………… in the garden.",
  answer: " was working",
  options: [
    " am working",
    " was working",
    " have been working",
    " will be workingd"
  ]
},
  {
  numb: 4,
  question: "I ………………… my homework. What shall I do now?",
  answer: " have done",
  options: [
    "did",
    " have done",
    " will do",
    "do"
  ]
},
  {
  numb: 5,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 6,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},
{
  numb: 7,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},
{
  numb: 8,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},
{
  numb: 9,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 10,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 11,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 12,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 13,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},


{
  numb: 14,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 15,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 16,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 17,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 18,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 19,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

{
  numb: 20,
  question: "She ………………… as an expert.",
  answer: " was regarded",
  options: [
    " regarded",
    " was regarded",
    " will regard",
    " is regarding"
  ]
},

// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
];
// creating an array and passing the number, questions, options, and answers
let questions = function(){
  return  getMultipleRandom(question_Storage,5);
}()


function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

