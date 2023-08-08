const bookModel = require("../Models/book.cjs");

// ============= Get all books ===============
exports.getAllBooks = async function (req, res) {
  try {
    const Books = await bookModel.find();
    return res.json({ Massage: "done", data: Books });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};

// ============= Get ONe book ================
exports.getOneBook = async function (req, res) {
  try {
    const Book = await bookModel.find({ _id: req.params.id });
    if (Book.length === 0) {
      return res.json({ Massage: "Book Not found", data: [] });
    }
    return res.json({ Massage: "done", data: Book });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};

// ============= Add a new book =================
exports.addNewBook = async function (req, res) {
  try {
    if (req.user.role === "Admin") {
      const createdBook = await bookModel.create(req.body);
      return res.json({ massage: "BOOk Added Succesfully", data: createdBook });
    } else {
      return res
        .status(403)
        .send({ massage: "You Don't Have The Right Permission" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};

// ============= Delete book ================
exports.deleteBook = async function (req, res) {
  try {
    if (req.user.role === "Admin") {
      await bookModel.findByIdAndDelete(req.params.id);
      return res.json({ massage: "Book Deleted", data: [] });
    } else {
      return res
        .status(403)
        .send({ massage: "You Don't Have The Right Permission" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};

// =============  Update book ================
exports.updateBook = async function (req, res) {
  try {
    if (req.user.role === "Admin") {
      const Book = await bookModel.findByIdAndUpdate(req.params.id, req.body);
      if (Book.length === 0) {
        return res.json({ Massage: "Book Not found", data: [] });
      }
      return res.json({ massage: "Book Updated", data: [] });
    } else {
      return res
        .status(403)
        .send({ massage: "You Don't Have The Right Permission" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ massage: err });
  }
};
