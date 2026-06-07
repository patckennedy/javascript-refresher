const complimentText = document.getElementById('complimentText');
const complimentBtn = document.getElementById('complimentBtn');

const compliments = [
    'You have a great attitude!',
    'You are doing an amazing job learning JavaScript!',
    'Your hard work is paying off!',
    'You have excellent problem-solving skills!',
    'You are more capable than you realize!',
    "Keep going, you're making progress every day!",
    'You bring positive energy wherever you go!',
    'You should be proud of your dedication!',
];

complimentBtn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * compliments.length);

    complimentText.textContent = compliments[randomIndex];
});
