export default async function getJson(hashKey) {
	const hashLink = 'https://' + hashKey + '.ipfs.dweb.link/review.json';
	await fetch(hashLink)
	.then(response => response.json())
	.then((jsonData) => {
		console.log(jsonData);
	  	return (jsonData)
	})
	.catch((error) => {
	  return(error)
	})
}