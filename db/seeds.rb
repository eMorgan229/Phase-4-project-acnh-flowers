# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "June", username: 'june32', password: '12345678')
User.create(name: "Tom", username: 'tom32', password: '67854321')
User.create(name: "Brett", username: 'brett32', password: '85673421')
User.create(name: "Sarah", username: 'sarah32', password: '31456784')


# the link to datamine the flowers https://gamewith.net/animal-crossing-new-horizons/article/show/17317
# more concise flower guide https://aiterusawato.github.io/satogu/acnh/flowers/simple.html#hyacinths
Flower.create(name: "Red", image: "https://img.gamewith.net/img/e5dba81dd1005e4d719aad59d6115edd.jpg", parents: "started from seeds", is_in_your_garden: false, user_id: nil)
Flower.create(name: "White", image: "https://img.gamewith.net/img/c25f80a03fecd9599410d073c83721e5.jpg", parents: "started from seeds", is_in_your_garden: false, user_id: nil)
Flower.create(name: "Yello", image: "https://img.gamewith.net/img/88507d298f12e87e5125d9c7049d418f.jpg", parents: "started from seeds", is_in_your_garden: false, user_id: nil)
Flower.create(name: "Orange Hybrid", image: "https://img.gamewith.net/img/257839da069147f9a0bee671b3087a60.jpg", parents: "Red and Yellow", is_in_your_garden: false, user_id: nil)
Flower.create(name: "Purple Hybrid", image: "https://img.gamewith.net/img/17d0addb780db49a070622af197aa5df.jpg", parents: "Either 2 Orange Hybrids or Orange Hybrid + Blue Hybrid", is_in_your_garden: false, user_id: nil)