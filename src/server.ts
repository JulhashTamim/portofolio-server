import app from "./app";

async function main() {
  try {
    app.listen(5000, () => console.log(`Example app listening on port 5000!`));
  } catch (e) {
    console.log(e);
  }
}

main();
