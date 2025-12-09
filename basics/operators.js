'operators add'

let x = 1 + 2; outputs = 3
let x = '1' + '2'; outputs = '12'
let x = 1 + '2'; outputs = 12
let x = 'hello world ' + 1 + 2; outputs = 'hellow world 12';
note = 'concatination from left to right';

'constrains:'

let x = 0.1;
let y = 0.2;
let z = x + y; Output = 0.30000000000000004; '(not exactly 0.3)'


'operators subtract'
let x = 10 - 5; output = 5
let x = 5 - 10; output = -5

let x = 10.5 - 2; output = 8.5; '(check for 10.8 and 10.2)'

let x = 10 - '5'; output = 5; '5 is coerced into the number'
let x = 10 - '-5'; output = 15; '5 is coerced into the number'
let x = 10 - '+5'; output = 5; '5 is coerced into the number'
let x = '10' - '+5'; output = 5; '5 is coerced into the number'

let x = 10 - true; output = 9; 'true is coerced into 1'
let x = 10 - false; output = 10; 'false is coerced into 0'

let x = 10-'hello'; output = NAN; 'hello cannot be converted to a valid number'

let x = 5n - 2n; output = 3n;  'Works with BigInts, resulting in a BigInt'


