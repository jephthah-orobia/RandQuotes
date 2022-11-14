const quotesBank = [
    {
        text: 'Nothing in this world can take the place of persistence. Talent will not: nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not: the world is full of educated derelicts. Persistence and determination alone are omnipotent.',
        author: 'Calvin Coolldge'
    },
    {
        text: 'Common sense is not so common.',
        author: 'Voltaire'
    },
    {
        text: 'Democracy is the theory that the common people know what they want, and deserve to get it good and hard.',
        author: 'H. L. Mencken'
    },
    {
        text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        author: 'Heraclitus'
    },
    {
        text: 'Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed to develop good character.',
        author: 'Heraclitus'
    },
    {
        text: "Life is one big road with lots of signs. So when you riding through the ruts, don't complicate your mind. Flee from hate, mischief and jealousy. Don't bury your thoughts, put your vision to reality. Wake Up and Live!",
        author: 'Bob Marley'
    },
    {
        text: "The jealous are troublesome to others, but a torment to themselves.",
        author: 'William Penn'
    },
    {
        text: "Faith is taking the first step even when you don't see the whole staircase.",
        author: 'Martin Luther King, Jr.'
    },
    {
        text: "Pray as though everything depended on God. Work as though everything depended on you.",
        author: 'Saint Augustine'
    },
    {
        text: "When you focus on being a blessing, God makes sure that you are always blessed in abundance",
        author: 'Joel Osteen'
    },
    {
        text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
        author: 'Swami Vlvekananda'
    },
    {
        text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
        author: 'Swami Vlvekananda'
    },
    {
        text: "If I am walking with two other men, each of them will serve as my teacher. I will pick out the good points of the one and imitate them, and the bad points of the other and correct them in myself.",
        author: 'Confucius'
    }
];

export const randomQuote = (prevIndex = -1) => {
    const indices = quotesBank.map((val, i) => i);
    if (prevIndex >= 0)
        indices.splice(prevIndex, 1);
    console.log(indices);
    let rand = Math.round(Math.random() * (indices.length - 1));
    console.log('seed: ' + rand);
    let randI = indices[rand];
    console.log('new index: ' + randI);
    return Object.assign({}, quotesBank[randI], { index: randI });
};

export default randomQuote;