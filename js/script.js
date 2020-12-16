


/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

   
    
  /* remove class 'active' from all article links  */

  /*const activeLinks = document.querySelectorAll('.titles a.active')
  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}*/
  
  /* add class 'active' to the clicked link */
 
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  
  /* get 'href' attribute from the clicked link */
    
  let activeLink = clickedElement.getAttribute('href');
  console.log(activeLink);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(activeLink);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');

};
  
const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  function clearMessages(){
    document.getElementById('messages').innerHTML = 'document.querySelector';
  }


  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    console.log(articles);

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
  }
    
  /* insert link into titleList */

  //titleList.inserAdjacentHTML(beforebein, HTML);

  //titleList.innerHTML = titleList.innerHTML + linkHTML;
   
  /* insert link into html variable */

  let html = 'html + linkHTML';

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
    
}

generateTitleLinks();
  
function generateTags(){
  /* find all articles */
const articles = articles.querySelectrorAll('.post .active');

  /* START LOOP: for every article: */
  for(article of articles){

    /* find tags wrapper */
    const wrapperTags = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = ('');

    /* get tags from data-tags attribute */
    let articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = article.Tags.split('');


    /* START LOOP: for each tag */
    for(tag of articleTagsArray){
      console.log(tag);

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */
    
    }

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

  }
}

generateTags();