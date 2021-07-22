# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ocean.create :name => "Pacific Ocean" , :area => 168723000, :volume => 669880000 , :location => "Separates Asia and Australasia from the Americas"
Ocean.create :name => "Atlantic Ocean.", :area => 85133000, :volume => 310410900 , :location => "Separates the Americas from Europe and Africa."
Ocean.create :name => "Arctic Ocean" , :area => 15558000, :volume => 18750000, :location => "Borders northern North America and Eurasia and covers much of the Artic."

puts "#{Ocean.count} oceans created."
