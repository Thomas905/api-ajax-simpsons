function fetchSimpsonsQuotesJSON() {
            
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

    axios.get(url)

        .then(function (response) {

            return response.data[0]; 

        })

        .then(function (simpsons) {

            console.log('data decoded from JSON:', simpsons);

            const simpsonsHtml = `
  
            <h2><strong>${simpsons.character}</strong></h2>
            <p>${simpsons.quote}</p>

    
            <img src="${simpsons.image}" />
  
            `;

            document.querySelector('#simpsons-quotes').innerHTML = simpsonsHtml;

        });
}
document.getElementById("button").addEventListener("click", fetchSimpsonsQuotesJSON);


fetchSimpsonsQuotesJSON();