const Router = require("express");
const bookController = require("../Controllers/bookController.cjs");
const authMiddleWare = require("../middlewares/auth.cjs");
const router = Router.Router();

router.post("/api/books", authMiddleWare, bookController.addNewBook); // Only Admin
router.get("/api/books", bookController.getAllBooks);
router.get("/api/books/:id", bookController.getOneBook);
router.put("/api/books/:id", authMiddleWare, bookController.updateBook); // Only Admin
router.delete("/api/books/:id", authMiddleWare, bookController.deleteBook); // Only Admin

module.exports = router;
