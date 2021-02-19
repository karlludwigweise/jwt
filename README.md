# fetch

A very thin wrapper around the `jsonwebtoken` package with `useJwt()` for the front-end.

## Usage

```
yarn add @klw/jwt
```

```
import { useJwt } from "@klw/jwt";

const jwt = useJwt();
const data = jwt.decode(token);
if (data && data.hasOwnProperty("permissions")) {
    ...
}
```
