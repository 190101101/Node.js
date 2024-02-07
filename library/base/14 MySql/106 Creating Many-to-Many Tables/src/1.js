const db = require('./db');
const ps = require('process');



const createManyToMany = () => {
  const article = `
    CREATE TABLE IF NOT EXISTS article (
      article_id INT(11) AUTO_INCREMENT PRIMARY KEY,
      article_title VARCHAR(100)
    )
  `;

  db.query(article, (err, result) => {
    if(err){
      console.log(err);
    }
    else{
      const tag = `
        CREATE TABLE IF NOT EXISTS tag (
          tag_id INT(11) AUTO_INCREMENT PRIMARY KEY,
          tag_name VARCHAR(100)
        )
      `;

      db.query(tag, (err, result) => {
        if(err){
          console.log(err);
        }

        const article_tag = `
          CREATE TABLE IF NOT EXISTS article_tag (
            article_tag_id INT(11) AUTO_INCREMENT PRIMARY KEY,
            article_id INT(11),
            tag_id INT(11),
            FOREIGN KEY (article_id) REFERENCES article(article_id) ON DELETE CASCADE,
            FOREIGN KEY (tag_id) REFERENCES tag(tag_id) ON DELETE CASCADE
          )
        `;

       db.query(article_tag, (err, result) => {
          if(err){
            console.log(err);
          }
          console.log(result);
        });


        console.log(result);
      });

    }
  });
}


db.connect((err) => {
  if(err){
    console.log('error', err);
  }
  
  createManyToMany();
});
