async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=ca3becd2-dc6c-46ad-96a1-361d57923473&offset=0")
        .then(data=>data.json())
        .then(data=>{
            if(data.status!="success") return;

            const matchesList = data.data;

            if(!matchesList) return[];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
        
}

getMatchData();

