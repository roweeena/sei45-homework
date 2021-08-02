Desert.destroy_all

Desert.create :name => 'Sahara', :location => 'Africa', :area => 8.6
Desert.create :name => 'Antarctica', :location => 'Antarctica', :area => 14.2

puts "#{ Desert.count } deserts created."
