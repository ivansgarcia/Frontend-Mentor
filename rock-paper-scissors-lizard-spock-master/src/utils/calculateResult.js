export const calculateResult = (you, house) => {
    if (you === 'paper' && house === 'paper') {
        return 'DRAW';
    }
    if (you === 'paper' && house === 'scissors') {
        return 'LOSE';
    }
    if (you === 'paper' && house === 'rock') {
        return 'WIN';
    }
    if (you === 'paper' && house === 'spock') {
        return 'WIN';
    }
    if (you === 'paper' && house === 'lizard') {
        return 'LOSE';
    }

    if (you === 'scissors' && house === 'paper') {
        return 'WIN';
    }
    if (you === 'scissors' && house === 'scissors') {
        return 'DRAW';
    }
    if (you === 'scissors' && house === 'rock') {
        return 'LOSE';
    }
    if (you === 'scissors' && house === 'spock') {
        return 'LOSE';
    }
    if (you === 'scissors' && house === 'lizard') {
        return 'WIN';
    }

    if (you === 'rock' && house === 'paper') {
        return 'LOSE';
    }
    if (you === 'rock' && house === 'scissors') {
        return 'WIN';
    }
    if (you === 'rock' && house === 'rock') {
        return 'DRAW';
    }
    if (you === 'rock' && house === 'spock') {
        return 'LOSE';
    }
    if (you === 'rock' && house === 'lizard') {
        return 'WIN';
    }

    if (you === 'spock' && house === 'paper') {
        return 'LOSE';
    }
    if (you === 'spock' && house === 'scissors') {
        return 'WIN';
    }
    if (you === 'spock' && house === 'rock') {
        return 'WIN';
    }
    if (you === 'spock' && house === 'spock') {
        return 'DRAW';
    }
    if (you === 'spock' && house === 'lizard') {
        return 'LOSE';
    }
    
    if (you === 'lizard' && house === 'paper') {
        return 'WIN';
    }
    if (you === 'lizard' && house === 'scissors') {
        return 'LOSE';
    }
    if (you === 'lizard' && house === 'rock') {
        return 'LOSE';
    }
    if (you === 'lizard' && house === 'spock') {
        return 'WIN';
    }
    if (you === 'lizard' && house === 'lizard') {
        return 'DRAW';
    }
}