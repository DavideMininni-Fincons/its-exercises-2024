const productMap = new Map();

function add() {
    const info = prompt('Insert model and rating separated by -');
    if (info && info.includes('-')){
        const rating = info.split('-');
        addProductRating(rating[0].trim(), parseInt(rating[1].trim()));
        return true;
    } else {
        return false;
    }
}

function addProductRating(model, rating) {
    if (productMap.has(model)) {
        const currentRatings = productMap.get(model);
        const totalRatings = currentRatings.ratings.length;
        const newAverageRating = (currentRatings.ratings.reduce((sum, rating) => sum + rating, 0) + rating) / (totalRatings + 1);
        productMap.set(model, {ratings: [...currentRatings.ratings, rating], averageRating: newAverageRating});
    } else {
        productMap.set(model, {ratings: [rating], averageRating: rating});
    }
}

let addMore;
do {
    addMore = add();
} while (addMore)

for (const [productKey, productValue] of productMap.entries()) {
    console.log(`The product ${productKey} has ${productValue.ratings.length} votes: ${productValue.ratings.join(', ')}.`);
    console.log(`The average rating is ${productValue.averageRating.toFixed(1)}`);
}
