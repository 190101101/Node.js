const db = require('./db');
const ps = require('process');


const getAllDataById = (id) => {
    const query = `
        SELECT * FROM article_tag 
            INNER JOIN article ON article.article_id = article_tag.article_id
            INNER JOIN tag ON tag.tag_id = article_tag.tag_id
            WHERE article_tag.article_id = ?
        `;
    db.query(query, [id], (err, result) => {
        if(err){
            console.log(err);
        }

        const article = [];
        const tag = [];

        for(let i = 0; i < result.length; i++){
            tag.push(result[i].tag_name);
        }

        article.article_title = result[0].article_title
        article.tag = tag;

        console.log('article:', article.article_title);
        console.log('tag:', tag);
    });
}

db.connect((err) => {
    if(err){
        console.log('error', err);
    }

    getAllDataById(30);
});
