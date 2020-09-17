# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


##### USERS #####



##### OPERAS #####
# carmen = Opera.create!(name: 'Carmen', composer: 'George Bizet', era: 'Classical', composer_img:'https://www.gstatic.com/tv/thumb/persons/476943/476943_v9_ba.jpg' )


##### ROLES #####
# carmen = Role.create!(name: "Carmen" , opera_id: 1)
# escamillo = Role.create!(name: "Escamillo" , opera_id: 1)






puts "#{Role.count} Roles created"
puts "#{Opera.count} Operas created"
puts "#{User.count} Users created"