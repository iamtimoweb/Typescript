# TypeScript is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

# What is TypeScript?
## JavaScript and More
TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

## A Result You Can Trust
TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

## Editor Checks
```typescript
const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
}

## Safety at Scale
TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
 
console.log(user.name)
Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.

```

## Interfaces
```typescript
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}
 
function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

## JSX
```typescript
import * as React from "react";
 
interface UserThumbnailProps {
  img: string;
  alt: string;
  url: string;
}
 
export const UserThumbnail = (props: UserThumbnailProps) =>
  <a href={props.url}>
    <img src={props.img} alt={props.alt} />
  </a>
```
