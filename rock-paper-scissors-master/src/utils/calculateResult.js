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

    if (you === 'scissors' && house === 'paper') {
        return 'WIN';
    }
    if (you === 'scissors' && house === 'scissors') {
        return 'DRAW';
    }
    if (you === 'scissors' && house === 'rock') {
        return 'LOSE';
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
    
}