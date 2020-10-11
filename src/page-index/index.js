require('../css/main.css');
import "babel-polyfill";
import axios from 'axios';
const BASEAPIURL= 'https://www.allthingshair.com/en-us/wp-json/wp/v2/posts?per_page=10'

const getArticleData= async () => {
    try {
        const response = await axios(BASEAPIURL);
        const articles= response.data;
        return articles;
    }catch(e) {
        console.error(e);
    }
}
const createArticle= article => {
    const div= document.createElement('div');
    div.className='col-sm-4';
    const title= document.createElement('h3');
    title.appendChild(document.createTextNode(article.title.rendered));
    div.appendChild(title);
    return div;
}
 const addArticlesToDom = articles => {
    const wrapper= document.querySelector('#wrapper');
    console.log(wrapper);
    articles.map(article => {
        wrapper.appendChild(createArticle(article));
    });
 };
const main = async () => {
    addArticlesToDom(await getArticleData());
};

main();