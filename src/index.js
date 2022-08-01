import app from "./app.js";

let port = process.env.PORT || 3000;
const main = async () => {
  try {
    await app.listen(port);
    console.log(`Server on port ${port}`);
  } catch (error) {
    console.log(error);
  }
}
main()

// export default app