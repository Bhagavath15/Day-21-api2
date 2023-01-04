

//City bikes

var cityBikeUrl = "http://api.citybik.es/v2/networks"

async function cityBike(){
    
    var urlFetch = await fetch(cityBikeUrl)
    var data = urlFetch.json()
    var endResult = await data
    //console.log(endResult)
    for(let i of endResult.networks){
        //console.log(i.name)
        try{
            var hrefLink = `http://api.citybik.es/v2/networks/${i.id}`
            var linkFetch = await fetch(hrefLink)
            var dataLink = linkFetch.json()
            var finalResult = await dataLink

            var name = i.name
            var  city = i.location.city
            var country = i.location.country
            //console.log(name)

            //console.log(finalResult)
            
            var company = finalResult.network.company[0]
            //console.log(company)

            
            
        }
            
            
      
        catch(err){
            // console.log(err)
            // console.log("error is occured")
        }
        
            var parent2 = document.createElement('div')
            parent2.setAttribute('class','card row col-lg-4 col-sm-12')
            parent2.innerHTML =`
            
                <div class="card-header">
                    <h3>${name}<h3>
                </div>
                <div class = "card-body">
                    <p><b>COMPANY</b>:${company}</p>
                    <p><b>CITY</b>:${city}</p>
                    <p><b>COUNTRY</b>:${country}</p>
                </div>
            `
            document.querySelector('body').append(parent2)    
        
        
    }
}
cityBike()