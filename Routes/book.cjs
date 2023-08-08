const Router = require("express");
const bookController = require("../Controllers/bookController.cjs");
const authMiddleWare = require("../middlewares/auth.cjs");
const router = Router.Router();

router.post("/api/books", authMiddleWare, bookController.addNewBook);
router.get("/api/books", authMiddleWare, bookController.getAllBooks);
router.get("/api/books/:id", authMiddleWare, bookController.getOneBook);
router.put("/api/books/:id", authMiddleWare, bookController.updateBook);
router.delete("/api/books/:id", authMiddleWare, bookController.deleteBook);

module.exports = router;
