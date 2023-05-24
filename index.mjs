#!/usr/bin/env zx

const env = await $`gum choose "staging" "dev" "prod"`;
console.log("got", env.stdout);

const username = await question("what is your name? ");
const passwordRes = await $`gum input --password --placeholder "your password"`;
const password = passwordRes.stdout;

// Advantage is you can code.
if (password.length < 6) {
  throw new Error("password too short");
}

const another = await $`read -s -p "password:" password; echo $password`;

console.log({ username, password, another: another.stdout });
