module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { authors, averageRating, description, isbn, ratingsCount, smallThumbnail, subtitle, title, thumbnail

      } = req.body;
    dbInstance.Books.insert(req.body)
      .then((data) => {
        console.log('data', data);
        res.status(200).send(data)
      })
      .catch((err) => {
        console.log('err', err);
        res.status(500).send()
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
console.log(params);
    dbInstance.Books.findOne(params)
      .then(book => res.status(200).send(book))
      .catch(() => res.status(500).send());
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.Books.find()
      .then(books => res.status(200).send(books))
      .catch(() => res.status(500).send());
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.Books.update({
      description: query.description
    })
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.Books.destroy(params)
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};