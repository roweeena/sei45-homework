# ## Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# ### Examples
# - 28 has 7 as a factor.
#  * In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors.
#  * In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor.
#  * Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# New file setup today. You will need to create a ```raindrops.rb``` file that can be executable in your terminal.

def raindrops(number)
  raindrops_str = ''

  # check if 3 or 5 or 7 is a factor
  raindrops_str += 'Pling' if number % 3 == 0
  raindrops_str += 'Plang' if number % 5 == 0
  raindrops_str += 'Plong' if number % 7 == 0

  raindrops_str = number.to_s if raindrops_str == ''

  raindrops_str
end

# puts "input 6: #{raindrops(6)}"
# puts "input 15: #{raindrops(15)}"
# puts "input 20: #{raindrops(20)}"
# puts "input 105: #{raindrops(105)}"

def menu
  puts "|//\\|" * 10
  puts "RAINDROPS".center(50)
  puts ">><<" * 12
  print "[Enter] to play, [q] to quit: "
end

menu
user_choice = gets[0].downcase

until user_choice == 'q'
  print "Choose a number: "
  user_num = gets.to_i
  puts raindrops(user_num)

  menu
  user_choice = gets[0].downcase
end

puts "Thanks for playing with Raindrops"