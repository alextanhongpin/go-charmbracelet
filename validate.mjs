function main() {
  const { user, pass, desc } = process.env;
  if (user !== "john") {
    throw new Error("expected name to be john");
  }
  if (pass.length < 6) {
    throw new Error("password too short");
  }

  if (!desc.trim().length) {
    throw new Error("description required");
  }
}

try {
  main();
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
