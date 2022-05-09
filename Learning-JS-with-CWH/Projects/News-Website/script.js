//  Your API key is: 9cab46ebccf143d59c62b24cd994d181 

// Initialize the new api parameters
let source = 'bbc-news';
let apiKey = '9cab46ebccf143d59c62b24cd994d181'

// Grab the news container
const newAccordian = document.getElementById('newAccordian');

// Crete a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getResponseHeader('Content-type', 'application/json')

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';
        // console.log(json);
        articles.forEach(function (element,index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>Breaking News ${index+1}</b>      ${element.title}
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  ${element.content}.<a href="${element.url}" target="_blank">Read more here</a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        });

        newAccordian.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

