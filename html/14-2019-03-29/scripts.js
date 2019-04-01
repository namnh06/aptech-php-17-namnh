function getPosts() {
  var post = document.getElementById('post-container');
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      var rawData = http.responseText;
      var data = JSON.parse(rawData);
      for (var i = 0; i < data.length; i++) {
        var card = document.createElement('div'); //card
        card.className = 'card my-3';

        var row = document.createElement('div'); //row
        row.className = 'row';
        var cardBody = document.createElement('div');
        cardBody.className = 'col-7 ml-5 mr-4 card-body';
        // add categories
        var cat = document.createElement('h6');
        if (typeof data[i].categories[0] === 'undefined') {
          var catText = document.createTextNode('Category: Other');
        } else {
          var catText = document.createTextNode('Category: ' + data[i].categories[0].name);
        };

        //console.log(data[i].categories[1].name);
        cat.appendChild(catText);
        cardBody.appendChild(cat);
        //add title
        var title = document.createElement('h4');
        var titleText = document.createTextNode(data[i].title);
        title.appendChild(titleText);
        cardBody.appendChild(title);
        //add date
        var postDate = document.createElement('p');
        postDate.className = 'text-muted';
        var dateText = document.createTextNode(data[i].created_at);
        postDate.appendChild(dateText);
        cardBody.appendChild(postDate);
        //add content
        var cardContent = document.createElement('p');
        cardContent.className = 'card-text';
        var cardText = document.createTextNode(data[i].description);
        cardContent.appendChild(cardText);
        cardBody.appendChild(cardContent);
        // add link
        var cardLink = document.createElement('a');
        cardLink.className = 'card-link';
        cardLink.setAttribute('href', '#');
        var cardText = document.createTextNode('Continue reading');
        cardLink.appendChild(cardText);
        cardBody.appendChild(cardLink);
        //add card body into row
        row.appendChild(cardBody);


        //add image
        var cardImg = document.createElement('div');
        cardImg.className = 'col-4 my-1 cardImage';
        cardImg.setAttribute('id', ('image-' + (i + 1)));
        row.appendChild(cardImg);
        card.appendChild(row);
        post.appendChild(card);
        document.getElementById('image-' + (i + 1)).style.backgroundImage = 'url(' + data[i].image_url + ')';
      }
      //     <div class="card mb-3" style="max-width: 540px;">
      //   <div class="row no-gutters">
      //     <div class="col-md-4">
      //       <img src="http://lorempixel.com/400/200/" class="card-img" alt="...">
      //     </div>
      //     <div class="col-md-8">
      //       <div class="card-body">
      //         <h5 class="card-title">Card title</h5>
      //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
      //           content. This content is a little bit longer.</p>
      //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    }
  }
  http.open('GET', 'https://namcoi.com/projects/news-website-laravel/public/api/posts');
  http.send();

}