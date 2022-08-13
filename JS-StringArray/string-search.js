const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial Laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Purple color phone with laptop'
];

// const searching = 'laptop';

// indexOf
/* const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching) != -1) {
        output.push(product);
    }
}
 */
// console.log(output);

    const searching = 'phone';
    const output = [];
    for (const product of products) {
        if (product.toLowerCase().includes(searching.toLowerCase())) {
            output.push(product);
        }
    }

    console.log(output);
