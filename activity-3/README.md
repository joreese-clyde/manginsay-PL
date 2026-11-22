## Errors in Activity 3

### Error 1 (line 3)

| | |
|---|---|
| **Message** | `error: expected ',' or ';' before 'for'` |
| **Cause** | The declaration `int total = 0` has no terminating semicolon. The parser only notices when it reaches `for` on the next line. |
| **Fix** | `int total = 0;` |

### Error 2 (line 4)

| | |
|---|---|
| **Message** | `error: expected ')' before '{' token` |
| **Cause** | The closing parenthesis of the `for` header is missing, so the parser finds `{` where it expects `)`. |
| **Fix** | `for (int i = 0; i < 5; i++) {` |

### Error 3 (line 7)

| | |
|---|---|
| **Message** | `error: expected ')' before ';' token` |
| **Cause** | The call to `printf` opens a parenthesis that is never closed. |
| **Fix** | `printf("%d\n", total);` |

## Corrected code

```c
#include <stdio.h>
int main() {
    int total = 0;
    for (int i = 0; i < 5; i++) {
        total = total + i;
    }
    printf("%d\n", total);
    return 0;
}
```