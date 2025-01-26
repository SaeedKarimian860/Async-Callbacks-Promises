// axios.get("https://swapi.tech/api/people/1/")
// .then(res => {
//     console.log("Response: ", res);
// })
// .catch((e) => {
//     console.log("ERROR", e);
// });

const getStarWarsPerson = async (id) => {
    try {
        await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(res.data.result.properties);
    } catch(e) {
        console.log("ERROR", e);
    }
};

getStarWarsPerson(5);
getStarWarsPerson(10);