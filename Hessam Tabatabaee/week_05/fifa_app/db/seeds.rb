Player.destroy_all

Player.create(:name => 'Cristiano', :family => 'Ronaldo', :national_goals => 109)
Player.create(:name => 'Ali', :family => 'Daei', :national_goals => 107)

puts "#{ Player.count } players created."

Team.destroy_all

Team.create(:name => 'Portugal', :worldcup_appearance => 7, :worldcup_champions => '0')
Team.create(:name => 'Argentina', :worldcup_appearance => 17, :worldcup_champions => '1978, 1986')

puts "#{ Team.count } teams created."
