let n = 4;
const stack = [n];

if (n <= 2) {
    print(n);
} else {
    let operacao = '*';
    for (let i = n - 1; i > 0; i--) {
        switch (operacao) {
            case '*':
                stack.push(stack.pop() * i);
                operacao = '/';
                break;
            case '/':
                stack.push(Math.trunc(stack.pop() / i));
                operacao = '+';
                break;
            case '+':
                stack.push(i);
                operacao = '-';
                break;
            default:
                stack.push(-i);
                operacao = '*';
        }
    }

    console.log(stack.reduce((acc, el) => acc + el, 0));
}