const db = require('./db');
const ps = require('process');

const createData = (data) => {
  const query = `INSERT INTO article (article_title) VALUES (?)`;

  db.query(query, [data.article_title], (err, result) => {
    if(err){
      console.log(err);
    }

    for(let i = 0; i < data.tag.length; i++){
      const query2 = `INSERT INTO tag (tag_name) VALUES (?)`;
      db.query(query2, [data.tag[i]], (err, result2) => {
          if(err){
            console.log(err)
          }

          const query3 = `INSERT INTO article_tag (article_id, tag_id) VALUES (?, ?)`;
          db.query(query3, [result.insertId, result2.insertId], (err, result3) => {
            if(err){
              console.log(err)
            }
            console.log(result3);
          });
      });
    }
  });
}

const createOtherData = (data) => {
    const query = `INSERT INTO article (article_title) VALUES (?)`;

    db.query(query, [data.article_title], (err, result) => {
        if(err){
          console.log(err);
        }

      for(let i = 0; i < data.tag.length; i++){
        const query = `INSERT INTO article_tag (article_id, tag_id) VALUES (?, ?)`;
        db.query(query, [result.insertId, data.tag[i]], (err, result2) => {
          if(err){
            console.log(err)
          }
          console.log(result2);
        });
      }
    });
}


db.connect((err) => {
  if(err){
    console.log('error', err);
  }
  
  createOtherData({
    article_title: 'node js is awesome',
    tag: [38, 39],

  })
});
