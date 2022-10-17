import { faker } from '@faker-js/faker';

 // Rowan Nikolaus


const searchData = [];

for (let index = 0; index < 20; index++) {
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const imageUrl = faker.image.food() ;
    searchData.push({
        id:index,
        name:randomName,
        email:randomEmail,
        image_url: imageUrl,
        review_count: faker.random.numeric(1) ,
        rating: faker.random.numeric(1) 
    })
}

console.log(searchData)


export {searchData}