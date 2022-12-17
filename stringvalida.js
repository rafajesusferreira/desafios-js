let entrada = '([])';

var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case '(':
            case '[':
            case '{':
                stack.push(s.charAt(i));

                break;
            case ')':
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }

                break;
            case '}':
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }

                break;
            case ']':
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }

                break;
        }
    }

    return stack.length === 0;
};

console.log(isValid(entrada));